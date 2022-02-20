const router = require('express').Router();
const { User, Character , Party , PartyGM , UserChar , UserCharParty  } = require('../../models');

router.get('/', (req, res) => {
    Party.findAll()
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/test/:id', (req, res) => {
    Party.findAll({
        where: {
            GM_id: req.params.id
        },
        include:'GM'
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
    Party.create({
        party_name: req.body.party_name,
        party_pass: req.body.party_pass,
        GM_id: req.body.GM_id
    })
      .then(dbPartyData => res.json(dbPartyData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;
