const express = require('express');
const compression = require('compression');
const path = require('path');

const server = express();
const PORT = process.env.PORT || 8080;

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

server.use(express.static(DIST_DIR));
server.use(compression);

server.get('/', (req, res) => {
  res.sendFile(HTML_FILE);
});

server.listen(PORT, () => {
  console.log(`App running at http://localhost:${PORT}`);
  console.log("Press Ctrl + C to shut the app down");
});