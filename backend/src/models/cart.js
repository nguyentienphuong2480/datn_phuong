'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cart.init({
    customerID: DataTypes.INTEGER,
    productID: DataTypes.STRING,
    image: DataTypes.STRING,
    productName: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    unitPrice: DataTypes.FLOAT,
    totalPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};