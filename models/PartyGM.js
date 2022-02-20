const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PartyGM extends Model {}

PartyGM.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
          },
          user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          party_id: {
            type: DataTypes.INTEGER,
            allowNull: false
          }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'partyGM'
    }
)

module.exports = PartyGM;