const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { User, Character , Party , PartyGM , UserChar , UserCharParty  } = require('../../models');

router.get('/', (req, res) => {
    Character.findAll()
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.get('/test', (req, res) => {
    User.findAll({
        where: {
            id: req.session.user_id
        },
        include: [ Character ]
    })
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
    Character.create({
        user_id: req.body.user_id,
        full_name: req.body.full_name,
        alignment: req.body.alignment,
        race: req.body.race,
        xp: req.body.xp,
        hp_max: req.body.hp_max,
        hp_current: req.body.hp_current,
        hp_temp: req.body.hp_temp,
        armor_class: req.body.armor_class,
        initiative: req.body.initiative,
        movement_ft: req.body.movement_ft,
        str: req.body.str,
        dex: req.body.dex,
        con: req.body.con,
        int: req.body.int,
        wis: req.body.wis,
        cha: req.body.cha,
        class: req.body.class_name,
        subclass: req.body.subclass_name,
        level: req.body.level
    }, {
        include: [ User ]
    })
      .then(dbCharData => res.json(dbCharData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
});

module.exports = router;


// {
//   "user_id": 2,
//   "full_name": "Jimmy Neutron",
//   "alignment": "Chaotic Evil",
//   "race": "Acorn",
//   "xp": 4200,
//   "hp_max": 10000,
//   "hp_current": 9999,
//   "hp_temp": 0,
//   "armor_class": 21,
//   "initiative": 1,
//   "movement_ft": 20,
//   "str": 10,
//   "dex": 10,
//   "con": 100,
//   "int": 10,
//   "wis": 10,
//   "cha": 10,
//   "class_name": "Wizard",
//   "subclass_name": "Kelly",
//   "level": 20
// }