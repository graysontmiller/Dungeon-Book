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
  const userCharacter = Character.findAll({
    where: {
      user_id: req.session.user_id
    },
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  });

  const userParty = Party.findAll({
    where: {
      GM_id: req.session.user_id
    },
    include: [
      {
        model: User,
        as: 'GM',
        attributes: ['username']
      }
    ]
  });

  Promise
    .all([userCharacter , userParty])
    .then(userData => {
      const characters = userData[0].map(character => character.get({ plain: true }));
      const parties = userData[1].map(party => party.get({ plain: true }));
      console.log(characters);
      console.log(parties);
      res.render('homepage', { characters, parties, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;