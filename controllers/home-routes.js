const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');
const { User, Character, Stats , PClass , Hp , Combat , Party , PartyGM , UserChar , UserCharParty  } = require('../models');

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
  Character.findAll({
    where: {
      user_id: req.session.user_id
    },
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbCharacterData => {
      const characters = dbCharacterData.map(character => character.get({ plain: true }));
      console.log(characters);
      res.render('homepage', { characters, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;