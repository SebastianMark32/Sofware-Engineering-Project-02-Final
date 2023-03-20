const { validationResult } = require('express-validator');

const Event = require('../models/event');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await Event.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postEvent = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;
  
  const title = req.body.title;
  const rFreq = req.body.rFreq;
  const rBymonth = req.body.rBymonth;
  const rBymonthDay = req.body.rBymonthDay;
  const rByweekDay = req.body. rByweekDay;

  try {
    const post = {
      title: title,
      rFreq: rFreq,
      rBymonth: rBymonth,
      rBymonthDay: rBymonthDay,
      rByweekDay: rByweekDay,
    };
    const result = await Event.save(post);
    res.status(201).json({ message: 'Posted!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};