const { validationResult } = require('express-validator');
const Leaderboard = require('../models/leaderboard');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await Leaderboard.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    console.log(err);
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.updateBoard = async (req, res, next) => {
  conesole.log("check");
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) return;
    console.log("check2")
    const id = req.body.id;
    const column = req.body.column;

  try {

    const result = await Leaderboard.update(column,id);

    res.status(201).json({ message: 'Posted!' });
  } catch (err) {
    console.log(err)
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};