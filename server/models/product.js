module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'product',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(100),
            allowNull: false
          },
        description: DataTypes.STRING(500),
        price: {
            type: DataTypes.DOUBLE,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.STRING(255),
            validate: {
              isUrl: true
            }
          }
      },
      { underscored: true }
    );
  };