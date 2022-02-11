'use strict';
const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      price: DataTypes.FLOAT
  });

  return Product;
};
  
module.exports = Product;
