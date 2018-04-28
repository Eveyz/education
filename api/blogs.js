/* 
 * @author: znz
*/

const express = require('express');
const path = require('path');
const router = express.Router();
const Blog = require('../models/blog');

/* Get Blogs */
router.get('/', (req, res) => {
    Blog.find((err, blogs) => {
        if(err) {
            throw err;
        }
        res.json(blogs);
    })
});

/* Create Blogs */
router.post('/', (req, res) => {
    var body = req.body;

    Blog.create(body, function(err, blogs) {
        if(err) {
            throw err;
        }
        res.json(blogs);
    })
});

/* Delete Blog */
router.delete('/:_id', (req, res) => {
    var query = {_id: req.params._id};
    
    Blog.remove(query, (err, blogs) => {
        if(err) {
            throw err;
        }
        res.json(blogs);
    })
});

/* Update Blog */
router.use('/:_id', (req, res) => {
    var blog = req.body;
    var query = req.params._id;
    // if the field doesn't exist $set will set a new field
    var update = {
        '$set': {
            title: blog.title,
            description: blog.description,
            author: blog.author
        }
    };

    var options = { new: true }; // newly updated record

    Blog.findOneAndUpdate(query, update, options, (err, blogs) =>{
        if(err) {
            throw err;
        }
        res.json(blogs);
    })
});

module.exports = router;