module.exports = function(sequelize, DataTypes) {
  var Player = sequelize.define("Player", {
    name: DataTypes.STRING
  });

  // Player.associate = function(models) {
  //   Player.hasMany(models.Quiz);
  // }

  // Player
  return Player;
};
