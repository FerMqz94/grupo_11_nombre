'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders_Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  }
  Orders_Products.init({
    id_order: DataTypes.INTEGER,
    id_product: DataTypes.INTEGER,
    quantity: {
      type : DataTypes.INTEGER,
      defaultValue: 1
    }
  }, {
    sequelize,
    modelName: 'Orders_Products',
    tableName: 'orders_products',
    // underscored: true,
    paranoid: true
  });
  return Orders_Products;
};