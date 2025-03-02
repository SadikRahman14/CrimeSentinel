'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    static associate(models) {
      // A Location belongs to one Region (the "consists of" relation from the Region side)
      Location.belongsTo(models.Region, {
        foreignKey: 'region_id',
        as: 'region'
      });
    }
  }
  Location.init({
    // id will be auto-generated
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    longitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    latitude: {
      type: DataTypes.STRING,
      allowNull: true
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Location',
    tableName: 'locations',
    timestamps: false
  });
  return Location;
};
