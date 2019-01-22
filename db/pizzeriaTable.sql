CREATE TABLE pizzeria
(
id SERIAL PRIMARY KEY,
name varchar(120),
address varchar (120),
zipcode integer,
city varchar (120),
state varchar (120),
aggregate_rating integer,
website_url text,
phone_number integer,
logo_image varchar (200),
pizzeria_image varchar (200),
pizza_image varchar (200),
pizzeria_review varchar(500)
);