const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send({ data: [one]});
});

router.get('/login', (req, res) => {
  console.log("come here to login");
});

module.exports = router;
