// Create web server
//==========================================

//Import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comment');

//Handle request
router.get('/', commentController.comment_list);
router.get('/create'. commentController.comment_create);
