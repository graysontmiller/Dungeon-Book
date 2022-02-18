const User = require('./User');
const { Character, Stats , PClass , Hp , Combat } = require('./Character');
const Userparty = require('./Userparty');
const Party = require('./Party');

User.hasMany(Character, {
    foreignKey: 'user_id',
    target: 'id'
  });
  
User.hasMany(Party, {
    foreignKey: 'user_id',
    target: 'id'
});
  
User.belongsToMany(Party, {
    as: 'user_parties',
    foreignKey: 'id',
    target: 'id',
    through: Userparty
});
  
  
User.hasMany(Userparty, {
    foreignKey: 'user_id',
    target: 'id'
});

Character.hasOne(Stats, {
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

Character.belongsTo(User, {
  foreignKey: 'user_id',
  target: 'id'
});


Character.hasMany(Party, {
  foreignKey: 'character_id',
  target: 'id'
});

Party.belongsToMany(User, {
  as: 'user_parties',
  foreignKey: 'id',
  target: 'id',
  through: Userparty
});


Party.hasMany(Userparty, {
  foreignKey: 'party_id',
  target: 'id'
});

Stats.belongsTo(Character, {
  foreignKey: 'character_id',
  target: 'id'
});

PClass.belongsTo(Character, {
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

module.exports = { User, Character, Stats , PClass , Hp , Combat , Party , Userparty };