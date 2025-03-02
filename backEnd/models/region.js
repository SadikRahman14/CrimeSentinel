'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    static associate(models) {
      // A Region "consists of" many Locations
      Region.hasMany(models.Location, { 
        foreignKey: 'region_id',
        as: 'locations'
      });
    }
  }
  Region.init({
    // id will be auto-generated by Sequelize (using migration definition)
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Region',
    tableName: 'regions',
    timestamps: false
  });
  return Region;
};
