CREATE TABLE users
(
  id SERIAL PRIMARY KEY,
  is_admin BOOLEAN default false,
  username VARCHAR (120),
  password text,
  first_name VARCHAR (120),
  last_name VARCHAR (120),
  email VARCHAR (120)
);