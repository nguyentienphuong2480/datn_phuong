'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo( models.OrderStatus, {foreignKey:'status', targetKey:'id', as:'statusData'})
    }
  }
  Order.init({
    id:{
      type: DataTypes.STRING,
      primaryKey: true
    },
    customerID: DataTypes.INTEGER,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.TINYINT,
    deliveryAddress: DataTypes.STRING,
    totalPrice: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};