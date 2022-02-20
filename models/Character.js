const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Character extends Model {}
Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
      allowNull: false
    },
    party_id: {
      type: DataTypes.INTEGER
    },
    full_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alignment: {
      type: DataTypes.STRING
    },
    race: {
      type: DataTypes.STRING
    },
    xp: {
      type: DataTypes.INTEGER
    },
    prof_bonus: {
      type: DataTypes.INTEGER
    },
    hp_max: {
      type: DataTypes.INTEGER
    },
    hp_current: {
      type: DataTypes.INTEGER
    },
    hp_temp: {
      type: DataTypes.INTEGER
    },
    armor_class: {
      type: DataTypes.INTEGER
    },
    initiative: {
      type: DataTypes.INTEGER
    },
    movement_ft: {
      type: DataTypes.INTEGER
    },
    str: {
      type: DataTypes.INTEGER
    },
    dex: {
      type: DataTypes.INTEGER
    },
    con: {
      type: DataTypes.INTEGER
    },
    int: {
      type: DataTypes.INTEGER
    },
    wis: {
      type: DataTypes.INTEGER
    },
    cha: {
      type: DataTypes.INTEGER
    },
    class: {
      type: DataTypes.STRING
    },
    subclass: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.STRING,
      defaultValue: 1
    },
    created_at: {
        type: DataTypes.DATE,
        default: DataTypes.NOW
    },
    updated_at: {
        type: DataTypes.DATE,
        default: DataTypes.NOW
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'character'
  }
);


module.exports = { Character };