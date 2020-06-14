module.exports = (sequelize, DataTypes) =>
  sequelize.define('Product', {
    sku: {
      type: DataTypes.STRING,
      unique: true
    },
    description: DataTypes.STRING,
    category: DataTypes.STRING,
    image: DataTypes.BLOB,
    price: DataTypes.DECIMAL
  })