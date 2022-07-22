const express = require('express');
const { check } = require('express-validator');

const thoughtsControllers = require('../controllers/thoughts-controllers');

const router = express.Router();

router.get('/:cid', thoughtsControllers.getThoughtById);

router.get('/user/:uid', thoughtsControllers.getThoughtsByUserId);

router.post('/', 
    [
        check('caption')
        .not()
        .isEmpty()
    ]
    , thoughtsControllers.createThought);
    
module.exports = router;