const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Party extends Model {}
Party.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      party_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      GM_id: {
        type: DataTypes.INTEGER,
      },
      party_characters: {
        type: DataTypes.INTEGER,
      },
      party_pass: {
        type: DataTypes.STRING,
      }    
    },
    {
      sequelize,
      freezeTableName: true,
      underscored: true,
      modelName: 'party'
    }
  );
  
module.exports = Party;