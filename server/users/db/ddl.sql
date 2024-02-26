--- DDL

-- Users Table
CREATE TABLE users (
    id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY, 
    email VARCHAR(100) NOT NULL, 
    name VARCHAR(200) NOT NULL, 
    password VARCHAR(150) NOT NULL
);

-- Profile Table
CREATE TABLE profile (
    id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY, 
    img VARCHAR(150) DEFAULT 'images/default.png', 
    birthdate DATE
);

-- Team Table
CREATE TABLE team (
    id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY
);

-- Member Table
CREATE TABLE member (
    id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY, 
    rol VARCHAR(10) NOT NULL
);

-- Project Table
CREATE TABLE project (
    id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY, 
    name VARCHAR(100) NOT NULL, 
    description TEXT NOT NULL, 
    deadline DATE,
    team_id VARCHAR(255) REFERENCES team(id)
);

-- Task Table
CREATE TABLE task (
    id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY, 
    title VARCHAR(255) NOT NULL, 
    description TEXT, 
    created DATE, 
    deadline DATE,
    assigned_by VARCHAR(255) NOT NULL,
    assigned_to VARCHAR(255) NOT NULL,
    project_id VARCHAR(255) NOT NULL|
);

-- Comment Table
CREATE TABLE comment (
    id VARCHAR(255) UNIQUE NOT NULL PRIMARY KEY, 
    body TEXT NOT NULL,
    created_by VARCHAR(255) NOT NULL,
    project_id VARCHAR(255) NOT NULL
);

-- Indexación y Claves Foráneas
ALTER TABLE profile
ADD COLUMN IF NOT EXISTS user_id VARCHAR(255),
ADD CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE member
ADD COLUMN IF NOT EXISTS user_id VARCHAR(255),
ADD COLUMN IF NOT EXISTS team_id VARCHAR(255),
ADD CONSTRAINT user_fk FOREIGN KEY (user_id) REFERENCES users(id),
ADD CONSTRAINT team_fk FOREIGN KEY (team_id) REFERENCES team(id);
ALTER TABLE project
ADD CONSTRAINT team_fk FOREIGN KEY (team_id) REFERENCES team (id);

ALTER TABLE task
ADD CONSTRAINT assigned_by_fk FOREIGN KEY (assigned_by) REFERENCES users (id),
ADD CONSTRAINT assigned_to_fk FOREIGN KEY (assigned_to) REFERENCES users (id),
ADD CONSTRAINT project_id FOREIGN KEY (project_id) REFERENCES project (id);

ALTER TABLE comment
ADD CONSTRAINT created_by_fk FOREIGN KEY (created_by) REFERENCES users (id),
ADD CONSTRAINT project_fk FOREIGN KEY (project_id) REFERENCES project (id);
