const express = require('express');

const { body } = require('express-validator');

const profileController= require ('../controllers/profile');

const auth =  require('../middleware/auth');

const router = express.Router();

router.get('/', auth, profileController.fetchAll);

router.post(
    '/',
    [
      auth,
    ],
    profileController.postProfile
);

module.exports = router;