
SELECT * FROM comments
INNER JOIN pizzeria 
ON pizzeria.id = comments.pizza_id
WHERE comments.pizza_id = $1;