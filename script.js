const express = require('express');
const app = express();
const crypto = require('crypto');
let generatedKeys = {};

app.use(express.json());

// Generate Key
app.post('/generateKey', (req, res) => {
  const key = crypto.randomBytes(16).toString('hex');
  generatedKeys[key] = Date.now() + 48 * 60 * 60 * 1000; // Expiry time of 48 hours
  res.json({ key: key, expiresAt: generatedKeys[key] });
});

// Validate Key
app.get('/validateKey/:key', (req, res) => {
  const key = req.params.key;
  const expiry = generatedKeys[key];
  if (expiry && Date.now() < expiry) {
    res.json({ valid: true });
  } else {
    res.json({ valid: false });
  }
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
