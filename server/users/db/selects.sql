--- Users Queries

--? All info
SELECT * FROM users;

--? All info of a specific user
SELECT * FROM users WHERE users.email = 'armando@coca.com';

--? Login info
SELECT u.email, u.password
FROM users u
WHERE
    u.email = 'armando@coca.com';

--- Profiles Queries

--? Get user info and profile info
SELECT u.id, u.name, u.email, p.birthdate, p.img
FROM profile p
    LEFT JOIN users u ON p.user_id = u.id;

--? Get Profile Image
SELECT p.image
FROM profile p
    LEFT JOIN users u ON p.user_id = u.id
WHERE
    u.id = '1';

--- Member Queries

SELECT t.id AS team_id, u.email, u.name, m.rol
FROM member m
    JOIN team t ON m.team_id = t.id
    JOIN users u ON m.user_id = u.id
WHERE u.id = '1';

