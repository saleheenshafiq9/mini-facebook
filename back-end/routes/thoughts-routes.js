const express = require('express');

const thoughtsControllers = require('../controllers/thoughts-controllers');

const router = express.Router();

router.get('/:cid', thoughtsControllers.getThoughtById);

router.get('/user/:uid', thoughtsControllers.getThoughtsByUserId);

router.post('/', thoughtsControllers.createThought);

module.exports = router;