const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Userparty extends Model {}
Userparty.init(
    {
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
          }
    },
    characterId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'character',
            key: 'id'
          }
    } 
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'userparty'
    }
  );
  
module.exports = Userparty;