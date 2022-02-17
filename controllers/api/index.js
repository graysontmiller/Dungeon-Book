const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const partyRoutes = require('./party-routes');
const characterRoutes = require('./character-routes');

router.use('/users', userRoutes);
router.use('/parties', partyRoutes);
router.use('/characters', characterRoutes);

module.exports = router;
