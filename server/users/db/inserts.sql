-- DML: Inserts for Users Table
INSERT INTO
    users (id, email, name, password)
VALUES (
        '1', 'armando@coca.com', 'Armando Almanza', 'coca123'
    ),
    (
        '2', 'marlene@nestle.com', 'Marlene Ambros', 'nestle123'
    ),
    (
        '3', 'sergio@suburbano.com', 'Sergio Cholula', 'suburbano123'
    ),
    (
        '4', 'ivan@unam.com', 'Ivan Espiritu Santo', 'puma123'
    ),
    (
        '5', 'itzel@coca.com', 'Itzel Geraldine', 'coca123'
    ),
    (
        '6', 'indra@tecmi.com', 'Indra Acosta', 'tecmilover123'
    );

-- DML: Inserts for Profile Table
INSERT INTO
    profile (id, birthdate, user_id)
VALUES ('1', '2000-05-31', '1'),
    ('2', '2002-05-20', '2'),
    ('3', '2002-07-27', '3'),
    ('4', '2000-07-26', '4'),
    ('5', '2002-12-03', '5'),
    ('6', '2000-05-14', '6');

-- DML: Inserts for Teams Table
INSERT INTO team (id) VALUES ('1'), ('2');

-- DML: Inserts for Member Table
INSERT INTO
    member (id, rol, user_id, team_id)
VALUES ('1', 'Leader', '1', '1'),
    ('2', 'Member', '1', '2'),
    ('3', 'Leader', '2', '2'),
    ('4', 'Member', '2', '1'),
    ('5', 'Member', '3', '1'),
    ('6', 'Member', '4', '1'),
    ('7', 'Member', '5', '1'),
    ('8', 'Member', '6', '2');

-- DML: Inserts for Project Table
INSERT INTO
    project (
        id, name, description, deadline, team_id
    )
VALUES (
        '1', 'Axo Project Nexus', 'aplicación de gestión de tareas y proyectos. Diseñada para mejorar la eficiencia y la colaboración, esta herramienta se convierte en tu aliado en la gestión empresarial', '2025-02-15', '1'
    ),
    (
        '2', 'Axo Cli', 'Aplicacion por consola que nos permite navegar entre ficheras y modificarlos directamente en la terminal o abrir el archivo o todo el proyecto en tu editor de codigo', '2025-02-20', '2'
    ),
    (
        '3', 'Berry Exams', 'Generadora de examenes para fortalecer conocimientos sobre materias en particular o hacer un examen tipo adminision de la UNAM', '2025-02-25', '1'
    );

-- DML: Inserts for Task Table
INSERT INTO
    task (
        id, title, description, created, deadline, assigned_by, assigned_to, project_id
    )
VALUES (
        '1', 'Create Mock Data', 'We need to create the mock data to see it in the front end', '2024-02-08', '2024-02-15', '1', '3', '1'
    ),
    (
        '2', 'Make the design', 'We need to start the designg, first we need the landing page and auth forms', '2024-02-08', '2024-02-20', '2', '2', '1'
    ),
    (
        '3', 'Tarea 2', 'Descripción de la Tarea 2', '2024-02-08', '2024-02-20', '2', '3', '2'
    ),
    (
        '4', 'Tarea 3', 'Descripción de la Tarea 3', '2024-02-08', '2024-02-25', '3', '4', '3'
    );

-- DML: Inserts for Comment Table
INSERT INTO
    comment (
        id, body, created_by, project_id
    )
VALUES (
        '1', 'He no mamen ya pongase a jalar', '1', '1'
    ),
    (
        '2', 'Ya diseñen animales', '2', '2'
    ),
    ('3', 'a', '3', '3');