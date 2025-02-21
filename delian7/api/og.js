export default async function handler(req, res) {
  const { name } = req.query;

  // Fetch metadata from Notion
  const notionData = await fetchNotionMetadata(name);

  if (!notionData) {
    return res.status(404).send("Not Found");
  }

  res.setHeader("Content-Type", "text/html");
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta property="og:title" content="${notionData.title}" />
      <meta property="og:description" content="${notionData.description}" />
      <meta property="og:image" content="${notionData.image}" />
      <meta http-equiv="refresh" content="0;url=${notionData.url}" />
    </head>
    <body>
      <script>window.location.href = "${notionData.url}";</script>
    </body>
    </html>
  `);
}

// Function to simulate fetching metadata from Notion (replace with API call)
async function fetchNotionMetadata(name) {
  const notionDatabase = {
    "resume": {
      title: "Delian Petrov's Resume",
      description: "Check out Delian Petrov’s professional resume.",
      image: "https://delianpetrov.com/avatar.jpg",
      url: "/"
    }
  };

  const response = await fetch(`https://qpqyy5wg42qcon34ph6mhljct40wtmpl.lambda-url.us-east-2.on.aws/?name=${name}`)

  if (response.ok) {
    const data = await response.json();

    if (data.url) {
      notionDatabase[name]["url"] = data.url;
    }
  }

  return notionDatabase[name] || null;
}