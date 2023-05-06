'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductDetail.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    description: DataTypes.TEXT,
    img1: DataTypes.STRING,
    img2: DataTypes.STRING,
    img3: DataTypes.STRING,
    img4: DataTypes.STRING,
    img5: DataTypes.STRING,
    img6: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ProductDetail',
  });
  return ProductDetail;
};