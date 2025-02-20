const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Enable CORS for all routes
app.use(cors());

// Parse JSON bodies
app.use(express.json());

app.use('/api', createProxyMiddleware({
  target: 'https://www.notion.so',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api/v3',
  },
  onProxyReq: (proxyReq, req, res) => {
    proxyReq.setHeader('origin', 'https://www.notion.so');
    console.log('Proxying request to:', proxyReq.path);
  },
  onProxyRes: (proxyRes, req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    console.log('Received response with status:', proxyRes.statusCode);
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(500).send('Proxy error');
  },
}));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server is running on http://localhost:${PORT}`);
});