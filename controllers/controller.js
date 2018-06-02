var express = require("express");
var router = express.Router();
var quiz = require("../models/quiz.js");
// Create all our routes and set up logic within those routes where required.
router.get("/createquiz", function(req, res) {
      res.render("createQuiz");
});