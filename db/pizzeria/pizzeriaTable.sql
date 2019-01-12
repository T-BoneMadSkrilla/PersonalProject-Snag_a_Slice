CREATE TABLE pizzeria
(
id SERIAL PRIMARY KEY,
name varchar(120),
address varchar (120),
zipcode integer,
city varchar (120),
state varchar (120),
cuisine varchar (120),
aggregate_rating integer,
website_url text,
image_url varchar (200),
logo_url varchar (200),
facebook_url varchar (200),
twitter_url varchar (200),
instagram_url varchar (200)
);