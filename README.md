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

// create user
// curl -X POST http://localhost:3000/user -d '{"first_name": "john", "last_name": "mibi", "email": "gogo@tt.ttt", "password": "123456"}' -H "Content-Type: application/json"

//login
// curl -X POST http://localhost:3000/auth/login -d '{"email": "john", "password": "123456"}' -H "Content-Type: application/json"