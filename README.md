CREATE DATABASE easy_movies;

CREATE TABLE users (
   id SERIAL PRIMARY KEY,
   email VARCHAR (50) UNIQUE NOT NULL,
   password VARCHAR (70) NOT NULL,
   first_name VARCHAR (50),
   last_name VARCHAR (50)
);

INSERT INTO users (email, password, first_name, last_name)
VALUES ('gogo@ttd.ttt', 'dffff', 'mogo', 'mobo');

