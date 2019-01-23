
UPDATE comments
SET review = $1;

SELECT * FROM comments
INNER JOIN pizzeria 
ON pizzeria.id = comments.pizza_id
WHERE comments.pizza_id = $1;