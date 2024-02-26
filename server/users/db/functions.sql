--* DML: Stored Procedures

--- Get info of profile
CREATE OR REPLACE FUNCTION get_user_info(userID VARCHAR) 
RETURNS TABLE(
	id VARCHAR, 
	name VARCHAR, 
	email VARCHAR, 
	birthdate DATE, 
	img VARCHAR
) 
LANGUAGE plpgsql AS 
$$
BEGIN
	RETURN QUERY
	SELECT u.id, u.name, u.email, p.birthdate, p.img
	FROM profile p
	    LEFT JOIN users u ON p.user_id = u.id
    WHERE p.user_id = userID;
END;
$$; 

--- Obtain project info
CREATE OR REPLACE FUNCTION project_details(projectId VARCHAR)
RETURNS TABLE (
    project_id VARCHAR(255),
    project_name VARCHAR(100),
    project_description TEXT,
    team_id VARCHAR(255),
    member_name VARCHAR(200),
    email VARCHAR(100)
) 
LANGUAGE plpgsql AS 
$$
BEGIN
    RETURN QUERY
    SELECT
        p.id,
        p.name,
        LEFT(p.description, 15),
        t.id AS team_id,
        u.name,
        u.email
    FROM
        project p
    JOIN
        team t ON p.team_id = t.id
    JOIN
        member m ON m.team_id = t.id
    JOIN
        users u ON m.user_id = u.id
	WHERE p.id = projectId;
END;
$$;
