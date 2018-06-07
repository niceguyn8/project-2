// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the players/scores
  app.get("/api/Players/", function(req, res) {
    db.leaderboard.findAll({})
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });


  // POST route for saving a new post
  app.post("/api/Players", function(req, res) {
    console.log(req.body);
    db.Post.create({
      name: req.body.name,
      score: req.body.score,
    })
      .then(function(dbPost) {
        res.json(dbPost);
      });
  });
}
