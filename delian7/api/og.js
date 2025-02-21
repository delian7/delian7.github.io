export default async function handler(req, res) {
  const { path } = req.query;

  // Fetch metadata from Notion
  const notionData = await fetchNotionMetadata(path);

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
async function fetchNotionMetadata(path) {
  const notionDatabase = {
    "resume": {
      title: "Delian Petrov's Resume",
      description: "Check out Delian Petrov’s professional resume.",
      image: "https://delianpetrov.com/avatar.jpg",
      url: "https://drive.google.com/file/d/1xl2LsWDi7Soc18Jh-fdSg49eDg39NkPA/view"
    }
  };

  return notionDatabase[path] || null;
}