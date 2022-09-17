const express = require('express');
const { check } = require('express-validator');
const checkAuth = require('../middleware/check-auth');

const storiesControllers = require('../controllers/stories-controller');
const fileUpload = require('../middleware/file-upload');


const router = express.Router();

router.get('/', storiesControllers.getStoryById);

router.get('/user/:uid', storiesControllers.getStoriesByUserId);


router.post('/', fileUpload.single('image'), storiesControllers.createStory);
    
module.exports = router;