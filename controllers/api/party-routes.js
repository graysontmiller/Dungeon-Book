const router = require('express').Router();
const withAuth = require('../../utils/auth');
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

router.post('/', withAuth, (req, res) => {
    Party.create({
        party_name: req.body.party_name,
        party_pass: req.body.party_pass,
        GM_id: req.session.user_id
    })
      .then(dbPartyData => res.json(dbPartyData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.put('/', withAuth, (req, res) => {
    Party.update(
      {
        player_id: req.session.user_id
      },
      {
        where: {
          party_pass: req.body.party_pass
        }
      }
    )
      .then(dbPartyData => {
        if (!dbPartyData) {
          res.status(404).json({ message: 'No Party found with this password' });
          return;
        }
        res.json(dbPartyData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;
