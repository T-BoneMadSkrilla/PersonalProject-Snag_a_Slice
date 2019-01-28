SELECT count(*) FROM comments
INNER JOIN pizzeria 
ON pizzeria.id = comments.pizza_id
WHERE pizzeria.id = $1;