const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Party } = require('../../models');
// const withAuth = require('../../utils/auth');

// get all users
router.get('/', (req, res) => {
    console.log('======================');
    Party.findAll({
      attributes: [
        'party_name',
        'party_pass',
        'character_id',
        'user_id',
      ]
    })
      .then(dbPartyData => res.json(dbPartyData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;