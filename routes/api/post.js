const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('Post Route')); //@route GET api/post, @desc Test route, @access Public

module.exports = router;
