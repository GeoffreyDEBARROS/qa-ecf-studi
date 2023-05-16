CREATE TABLE
    users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255),
        password VARCHAR(255),
        default_guests INT,
        name VARCHAR(255)
    )
CREATE TABLE
    starters (
        id INT AUTO_INCREMENT PRIMARY KEY,
        starter VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
    );

CREATE TABLE
    dishes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        dishe VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
    );

CREATE TABLE
    desserts (
        id INT AUTO_INCREMENT PRIMARY KEY,
        dessert VARCHAR(255) NOT NULL,
        price DECIMAL(10, 2) NOT NULL
    );

INSERT INTO
    starters (starter, price)
VALUES ('Salade César', 5.99), ('Muffins au poulet', 4.50), (
        'Croquette de pommes de terre',
        4.99
    );

('Vichyssoise de pommes de terre', 4.99);

INSERT INTO
    dishes (dishe, price)
VALUES (
        'Poulet au curry et coco',
        12.50
    ), (
        'Brochettes de poulet aux épices',
        12
    ), ('Tender de poulet', 12.50);

INSERT INTO
    desserts (dessert, price)
VALUES ('Tiramisu', 4.50), ('Mousse au chocolat', 4), ('Panna cotta', 4.50), ('Iles flottantes', 4);

CREATE TABLE
    schedule (
        days VARCHAR(20),
        morning_open VARCHAR(20),
        morning_close VARCHAR(20),
        evening_open VARCHAR(20),
        evening_close VARCHAR(20)
    );

INSERT INTO
    schedule (
        days,
        morning_open,
        morning_close,
        evening_open,
        evening_close
    )
VALUES (
        'Lundi',
        '11:00:00',
        '14:00:00',
        '18:30:00',
        '23:30:00'
    ), (
        'Mardi',
        '11:00:00',
        '14:00:00',
        '18:30:00',
        '23:30:00'
    ), (
        'Mercredi',
        '11:00:00',
        '14:00:00',
        '18:30:00',
        '23:30:00'
    ), (
        'Jeudi',
        '11:00:00',
        '14:00:00',
        '18:30:00',
        '23:30:00'
    ), (
        'Vendredi',
        '11:00:00',
        '14:00:00',
        '18:30:00',
        '23:30:00'
    ), (
        'Samedi',
        '11:00:00',
        '15:00:00',
        '18:30:00',
        '23:30:00'
    ), (
        'Dimanche',
        '11:00:00',
        '15:00:00',
        '18:30:00',
        '23:30:00'
    );

INSERT INTO
    schedule (
        days,
        morning_open,
        morning_close,
        evening_open,
        evening_close
    )
VALUES (
        'Lundi',
        '11:00',
        '15:00',
        '18:00',
        '23:00'
    );

INSERT INTO
    schedule (
        days,
        morning_open,
        morning_close,
        evening_open,
        evening_close
    )
VALUES (
        'Mardi',
        '11:00',
        '15:00',
        '18:00',
        '23:00'
    );

INSERT INTO
    schedule (
        days,
        morning_open,
        morning_close,
        evening_open,
        evening_close
    )
VALUES (
        'Mercredi',
        '11:00',
        '15:00',
        '18:00',
        '23:00'
    );

INSERT INTO
    schedule (
        days,
        morning_open,
        morning_close,
        evening_open,
        evening_close
    )
VALUES (
        'Jeudi',
        '11:00',
        '15:00',
        '18:00',
        '23:00'
    );

INSERT INTO
    schedule (
        days,
        morning_open,
        morning_close,
        evening_open,
        evening_close
    )
VALUES (
        'Vendredi',
        '11:00',
        '15:00',
        '18:00',
        '00:00'
    );

INSERT INTO
    schedule (
        days,
        morning_open,
        morning_close,
        evening_open,
        evening_close
    )
VALUES (
        'Samedi',
        '11:00',
        '15:00',
        '18:00',
        '00:00'
    );

INSERT INTO
    schedule (
        days,
        morning_open,
        morning_close,
        evening_open,
        evening_close
    )
VALUES (
        'Dimanche',
        '11:00',
        '15:00',
        '18:00',
        '23:00'
    );

CREATE TABLE
    reservation (
        id INT PRIMARY KEY AUTO_INCREMENT,
        date DATE NOT NULL,
        hour TIME NOT NULL,
        email VARCHAR(255) NOT NULL,
        default_guests INT NOT NULL
    );