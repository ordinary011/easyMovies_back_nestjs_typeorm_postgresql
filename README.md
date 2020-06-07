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
// curl -X POST http://localhost:3000/user -d '{"first_name": "john", "last_name": "mibi", "email": "gffo@tt.ttt", "password": "123456"}' -H "Content-Type: application/json"

//login
// curl -X POST http://localhost:3000/auth/login -d '{"username": "gogo@tt.ttt", "password": "123456"}' -H "Content-Type: application/json"

//simple check
// curl http://localhost:3000/auth/profile -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3RfbmFtZSI6ImpvaG4iLCJsYXN0X25hbWUiOiJtaWJpIiwiZW1haWwiOiJnb2dvQHR0LnR0dCIsImlhdCI6MTU5MTM5ODQ4MCwiZXhwIjoxNTkxNDAyMDgwfQ.rSiB0IgM5T4CmFtqLnqTAvcbBI_C6PtHFoIQ53Iy4Mg"