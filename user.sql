CREATE DATABASE signup_data;

USE signup_data;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  forename VARCHAR(50),
  surname VARCHAR(50),
  email VARCHAR(100),
  password VARCHAR(100),
  username VARCHAR(50),
  birth_date DATE,
  gender VARCHAR(10)
);
