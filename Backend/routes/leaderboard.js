const express = require('express');

const { body } = require('express-validator');

const leaderboardController = require ('../controllers/leaderboard');

const auth =  require('../middleware/auth');

const routers = express.Router();

routers.get('/', auth, leaderboardController.fetchAll);

routers.post('/',
    [
      auth,
      body('column').trim().isLength({ min: 1 }).not().isEmpty(),
      body('id').trim().isLength({max:1}).not().isEmpty(),
    ],
    leaderboardController.updateBoard
  );


module.exports = routers;