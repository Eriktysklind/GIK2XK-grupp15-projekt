module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'rating',
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        rating: {
          type: DataTypes.DOUBLE,
          allowNull: false,
/*           validate: {
            greaterThan: 0,
            lessThanOrEqualTO: 5
          } */
        },
      },
      { underscored: true }
    );
  };