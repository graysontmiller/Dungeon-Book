const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class UserCharParty extends Model {}
UserCharParty.init(
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    UserChar: {
        type: DataTypes.INTEGER,
        references: {
            model: 'userChar',
            key: 'id'
          }
    },
    party_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'party',
            key: 'id'
          }
    } 
    },
    {
      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'userCharParty'
    }
  );
  
module.exports = UserCharParty;