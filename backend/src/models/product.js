'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.belongsTo( models.Brand, {foreignKey:'brand', targetKey:'id', as:'brandData'})
    }
  }
  Product.init({
    id:{
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: DataTypes.STRING,
    brand: DataTypes.INTEGER,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    trash: DataTypes.TINYINT,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};