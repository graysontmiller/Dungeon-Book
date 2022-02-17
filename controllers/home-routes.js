const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Character, Stats , PClass , Hp , Combat , Party } = require('../models');

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

// router.get('/register', (req, res) => {
//   if (req.session.loggedIn) {
//     res.redirect('/');
//     return;
//   }

//   res.render('register');
// });

module.exports = router;