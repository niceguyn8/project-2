module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    name: DataTypes.STRING,
    score: DataTypes.INTEGER
  });
  return Todo;
};
