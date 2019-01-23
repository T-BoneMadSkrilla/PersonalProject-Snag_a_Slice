CREATE TABLE comments
(
  id SERIAL PRIMARY KEY,
  username VARCHAR (120),
  review VARCHAR (500),
  pizza_id VARCHAR (120)
);