export default async function handler(req, res) {
  const { name } = req.query;

  // Fetch metadata from Notion
  const notionData = await fetchNotionMetadata(name);

  if (!notionData) {
    return res.end(`
      <script>window.location.href = '/'</script>
    `)
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
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background: lavender;
          margin: 0;
        }
        .spinner {
          width: 80px;
          height: 80px;
          border: 10px solid rgba(0, 0, 0, 0.1);
          border-top: 10px solid #3498db;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    </head>
    <body>
      <div class="spinner"></div>
      <script>window.location.href = "${notionData.url || '/'}";</script>
    </body>
    </html>
  `);
}

// Function to simulate fetching metadata from Notion (replace with API call)
async function fetchNotionMetadata(name) {
  const response = await fetch(`https://qpqyy5wg42qcon34ph6mhljct40wtmpl.lambda-url.us-east-2.on.aws/?name=${name}`)
  const data = await response.json();

  if (!data["url"]) {
    return null;
  }

  return data;
}