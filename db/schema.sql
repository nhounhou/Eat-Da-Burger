-- Drops the day_planner_db if it already exists --
DROP DATABASE IF EXISTS burger_db;

-- Create the database day_planner_db and specified it for use.
CREATE DATABASE burger_db;

USE burger_db;

-- Create the table burgers.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured boolean,
  PRIMARY KEY (id)
);