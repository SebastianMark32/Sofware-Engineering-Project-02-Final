const { validationResult } = require('express-validator');

const Profile = require('../models/profile');

exports.fetchAll = async (req, res, next) => {
  try {
    const [allPosts] = await Profile.fetchAll();
    res.status(200).json(allPosts);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};

exports.postProfile = async (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) return;
  
  const profilePic = req.body.profilePic;
 

  try {
    const post = {
      profilePic: profilePic,
    };
    const result = await Profile.save(post);
    res.status(201).json({ message: 'Posted!' });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};