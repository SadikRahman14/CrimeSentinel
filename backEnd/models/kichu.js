'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kichu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kichu.init({
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kichu',
  });
  return Kichu;
};