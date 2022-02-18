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

  // get a specific party
router.get('/:id', (req, res) => {
    Party.findOne({
        attributes: {exclude: ['password'] },
        where: {
            id: req.params.id
        }
    })
    .then(dbPartyData => res.json(dbPartyData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;