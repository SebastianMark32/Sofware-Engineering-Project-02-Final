const express = require('express');

const {body } = require('express-validator');

const router = express.Router();

const auth = require('../middleware/auth');

const postsController = require('../controllers/posts');

router.get('/',auth,postsController.fetchAll)

router.post('/',
    [
        auth,
        body('title').trim().isLength({min:5}).not().isEmpty(),
        body('body').trim().isLength({min:10}).not().isEmpty(),
        body('user').trim().not().isEmpty(),
    ],
     postsController.postPost
);

router.delete('/:id', auth,postsController.deletePost)
module.exports = router;