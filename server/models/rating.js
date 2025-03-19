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
          allowNull: false
          //Sätta en validate på minsta samt högsta betyg
        },
      },
      { underscored: true }
    );
  };