-- Drops the leaderboard if it exists currently --
DROP DATABASE IF EXISTS leaderboard;
-- Creates the "todolist" database --
CREATE DATABASE leaderboard;
USE leaderboard;

CREATE TABLE Scores(
    name VARCHAR(10) NOT NULL DEFAULT 'Anonymous' PRIMARY KEY,
    score INT(5) UNSIGNED NOT NULL DEFAULT '0',
    ts TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
