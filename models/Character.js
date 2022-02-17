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
    player: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'user',
          key: 'id'
      }
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: { 
        type: DataTypes.STRING
    },
    full_name: {
        type: DataTypes.VIRTUAL,
        get() {
          return `${this.first_name} ${this.last_name}`;
        },
        set(value) {
          throw new Error('Do not try to set the `full_name` value!');
        }
    },
    alignment: { 
        type: DataTypes.STRING,
        allowNull: false
    },
    race: {
        type: DataTypes.STRING,
        allowNull: true
    },
    xp: {
        type: DataTypes.INTEGER,
        default: 0
    },
    prof_bonus: {
        type: DataTypes.INTEGER,
        default: 2
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'character'
  }
);

class Stats extends Model {}
Stats.init(
    {
        character_id: {
            type: DataTypes.INTEGER,
            allowNull: false
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
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'stats'
    }
);

class PClass extends Model {}
PClass.init(
    {
        character_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          class_name: {
            type: DataTypes.STRING
          },
          subclass_name: {
            type: DataTypes.STRING
          },
          class_level: {
            type: DataTypes.INTEGER
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'pclass'
    }
);

class Hp extends Model {}
Hp.init(
    {
        character_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          max: {
            type: DataTypes.INTEGER
          },
          current: {
            type: DataTypes.INTEGER
          },
          temp: {
            type: DataTypes.INTEGER
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'hp'
    }
);

class Combat extends Model {}
Combat.init(
    {
        character_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          armor_class: {
            type: DataTypes.INTEGER
          },
          initiative: {
            type: DataTypes.INTEGER
          },
          movement_ft: {
            type: DataTypes.INTEGER
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'combat'
    }
);

module.exports = { Character, Stats , PClass , Hp , Combat  };