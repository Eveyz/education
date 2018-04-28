const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  console.log("index page");
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

router.get('/login', (req, res) => {
  console.log("come here to login");
  res.sendFile(path.resolve(__dirname, '..', 'public', 'index.html'));
});

module.exports = router;
