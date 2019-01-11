CREATE TABLE pizzeria
(
id SERIAL PRIMARY KEY,
name varchar(120),
address varchar (120),
city varchar (120),
state varchar (120),
website_url text,
image_url varchar (200),
menu_url varchar (200),
cuisine varchar (120),
aggregate_rating integer,
facebook_url varchar (200),
twitter_url varchar (200),
instagram_url varchar (200)
);