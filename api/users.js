/* 
 * @author: znz
*/

const express = require('express');
const path = require('path');
const router = express.Router();
const User = require('../models/user');

/* Signup User */
router.post('/signup', (req, res) => {
	var body = req.body;

	User.create(body, function(err, users) {
		if(err) {
			throw err;
		}
		res.json(users);
	})
});

module.exports = router;