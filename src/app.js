require('dotenv').config();
const path = require('path');
const express = require('express');
const requests = require('./data/requests');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.get('/api/requests', (req, res) => {
  res.json({
    requests: requests
      .slice()
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
  });
});

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Client CRM mock running on port ${PORT}`);
});
