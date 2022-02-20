const User = require('./User');
const { Character } = require('./Character');
const Party = require('./Party');
const PartyGM = require('./PartyGM');
const UserChar = require('./UserChar');
const UserCharParty = require('./UserCharParty');

User.hasMany(Character, {
  foreignKey: 'user_id',
  target: 'id'
});


User.hasMany(Party, {
  as: 'player',
  foreignKey: 'player_id',
  target: 'id'
});

// User.belongsToMany(Party, {
//   through: PartyGM
// });

Character.belongsTo(User, {
  foreignKey: 'user_id',
  target: 'id'
});

Character.belongsTo(Party, {
  foreignKey: 'party_id',
  target: 'id'
});


// Character.hasMany(Party, {
//   foreignKey: 'character_id',
//   target: 'id'
// });

// PartyGM.belongsTo(User, {
//   foreignKey: 'user_id',
//   target: 'id'
// });

// PartyGM.belongsTo(Party, {
//   foreignKey: 'party_id',
//   target: 'id'
// });

Party.belongsTo(User, {
  as: 'GM',
  foreignKey: 'GM_id',
  target: 'id'
});

Party.hasMany(Character, {
  foreignKey: 'party_id',
  target: 'id'
});

// Party.hasMany(UserChar, {
//   foreignKey: 'party_id',
//   target: 'id'
// });

// UserChar.belongsTo(User, {
//   foreignKey: 'user_id',
//   target: 'id'
// });

// UserChar.belongsTo(Character, {
//   foreignKey: 'character_id',
//   target: 'id'
// });


// UserChar.belongsToMany(Party, {
//   through: UserCharParty
// });

// UserCharParty.belongsTo(Party, {
//   foreignKey: 'party_id',
//   target: 'id'
// });

// UserCharParty.belongsTo(UserChar, {
//   foreignKey: 'UserChar',
//   target: 'id'
// });

module.exports = { User, Character , Party , PartyGM , UserChar , UserCharParty };