module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'cartRow', 
      {
      amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
        defaultValue: 1
      },
    }, 
    { underscored: true });
  };