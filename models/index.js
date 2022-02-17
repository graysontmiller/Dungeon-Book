const User = require('./User');
const { Character, Stats , PClass , Hp , Combat } = require('./Character');
const Party = require('./Party');

User.hasMany(Character, {
    foreignKey: 'player',
     target: 'id'
});

User.belongsToMany(Character, {
    foreignKey: 'characters',
    target: 'id'
});

User.hasMany(Party, {
    foreignKey: 'GM_id',
    target: 'id'
});

User.belongsToMany(Party, {
    foreignKey: 'parties',
    target: 'id'
});

Character.belongsTo(User, {
  foreignKey: 'player',
  target: 'id'
});


Character.hasMany(User, {
  foreignKey: 'characters',
  target: 'id'
});


Character.hasMany(Party, {
  foreignKey: 'party_characters',
  target: 'id'
});


Character.hasOne(Stats, {
  foreignKey: 'character_id',
  target: 'id'
});


Character.hasMany(PClass, {
  foreignKey: 'character_id',
  target: 'id'
});


Character.hasOne(Hp, {
  foreignKey: 'character_id',
  target: 'id'
});


Character.hasOne(Combat, {
  foreignKey: 'character_id',
  target: 'id'
});

Stats.belongsTo(Character, {
  foreignKey: 'character_id',
  target: 'id'
});

PClass.belongsToMany(Character, {
    foreignKey: 'character_id',
    target: 'id'
});

Hp.belongsTo(Character, {
    foreignKey: 'character_id',
    target: 'id'
  });

Combat.belongsTo(Character, {
  foreignKey: 'character_id',
  target: 'id'
});

Party.belongsTo(User, {
  foreignKey: 'GM_id',
  target: 'id'
});

Party.belongsTo(Character, {
  foreignKey: 'party_characters',
  target: 'id'
});

Party.hasMany(User, {
  foreignKey: 'parties',
  target: 'id'
});

module.exports = { User, Character, Stats , PClass , Hp , Combat , Party };