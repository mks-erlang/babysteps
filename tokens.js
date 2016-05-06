var jwt = require('jsonwebtoken');
var my = require('./config.js');
// var dotenv = require('dotenv').config();

var tokens = {};

tokens.generateToken = function (username) {
  return jwt.sign({username: username}, my.secret, {expiresIn: 1440});
};

tokens.verifyToken = function (token, res, next) {
  return jwt.verify(token, my.secret, function (err) {
    if (err) {
      res.json({success: false, message: 'Unauthorized user'});
    } else {
      next();
    }
  });
};

tokens.verifyuser = function (token, res) {
  return jwt.verify(token, my.secret, function (err) {
    if (err) {
      res.json({success: false, message: 'Unauthorized user'});
    } else {
      res.json({success: true, message: 'User is authorized'});
    }
  });
};

module.exports = tokens;
