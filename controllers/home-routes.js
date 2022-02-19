const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
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

router.get('/character', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  res.render('character')
});

router.get('/home', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================');
  res.render('homepage')
});


module.exports = router;