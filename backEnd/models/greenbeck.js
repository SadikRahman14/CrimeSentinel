'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class GreenBeck extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  
  
  GreenBeck.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,  
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,  
    },
      email: {
        type: DataTypes.STRING,
        allowNull: false, 
        unique: true,      
      }
  }, {
    sequelize,
    modelName: 'GreenBeck',
  });


  return GreenBeck;
};