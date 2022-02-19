const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Character, Stats , PClass , Hp , Combat , Party } = require('../models');

router.get('/', (req, res) => {
  console.log(req.session);
  res.render('welcome')
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/home');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/home');
    return;
  }

  res.render('signup');
});

router.get('/home', (req, res) => {
  console.log(req.session);

  res.render('homepage');
});


module.exports = router;