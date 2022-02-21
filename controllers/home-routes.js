const router = require('express').Router();
const sequelize = require('../config/connection');
const { Op } = require("sequelize");
const withAuth = require('../utils/auth');
const { User, Character, Party , PartyGM , UserChar , UserCharParty  } = require('../models');

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
      [Op.or]: [
        {GM_id: req.session.user_id},
        {player_id: req.session.user_id}
      ]
    },
    include: [
      {
        model: User,
        as: 'GM',
        attributes: ['username']
      },
      {
        model: Character,
        attributes: ['id', 'user_id', 'party_id', 'full_name'],
        include: {
          model: User,
        }
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


router.get('/party/:id', (req, res) => {
  const campaignParty = Party.findOne({
      where: {
          id: req.params.id
      },
      include: [
        {
          model: User,
          as: 'GM',
          attributes: ['username']
        },
        {
          model: Character,
          attributes: ['id', 'user_id', 'party_id', 'full_name'],
          include: {
            model: User,
            attributes: ['username']
          }
        }
      ]
  })

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

  Promise
    .all([userCharacter , campaignParty])
    .then(userData => {
      const characters = userData[0].map(character => character.get({ plain: true }));
      const party = userData[1].get({ plain: true });
      console.log(characters);
      console.log(party);
      res.render('campaign', { characters, party, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;