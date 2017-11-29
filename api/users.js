/* 
 * @author: znz
*/

const express = require('express');
const path = require('path');
const router = express.Router();
const User = require('../models/user');

/* Signup User */
router.post('/signup', (req, res) => {
	if(req.body.email && req.body.username && req.body.password && req.body.passwordCon) {
		userData = {
			email: req.body.email,
			username: req.body.username,
			password: req.body.password,
			passwordCon: req.body.passwordCon
		}

		User.create(userData, function(err, users) {
			if(err) {
				throw err;
			}
			res.json(users);
		})
	}

});

module.exports = router;