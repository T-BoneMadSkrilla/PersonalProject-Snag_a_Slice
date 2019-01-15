INSERT INTO users 
(username, password, first_name, last_name, email) 
VALUES 
(${username}, ${password}, ${first_name}, ${last_name}, ${email}
) 
RETURNING *;