const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const { generatePosts } = require('./postFactory');

const app = express();
const PORT = process.env.PORT || 8000;

// Content Security Policy configuration
const csp = {
  directives: {
    defaultSrc: ["'self'"]
  }
};

// Helmet with CSP
app.use(helmet.contentSecurityPolicy(csp));

// Enable CORS (equivalent to Flask-CORS)
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Root URL response
app.get('/', (req, res) => {
  console.log('Request for Root URL');
  res.status(200).json({ name: 'Data Retrieval Service', version: '1.0' });
});

// Posts endpoint
app.get('/posts', (req, res) => {
  const data = generatePosts(5);
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;