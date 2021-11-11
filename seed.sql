INSERT INTO department (id, name)
VALUES  (1, "Marketing"),
        (2, "Human Resources"),
        (3, "Engineering");

INSERT INTO role (id, title, salary, department_id)
VALUES  (1, "Chief Marketing Officer", "400000", 1),
        (2, "Marketing Manager", "120000", 1),
        (3, "Junior Marketing Agent", "65000", 1),
        (4, "Head of Human Resources", "150000", 2),
        (5, "Human Resources Officer", "65000", 2),
        (6, "Chief Engineer", "250000", 3),
        (7, "Senior Engineer", "150000", 3),
        (8, "Junior Engineer", "75000", 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES  (1, "Lauren", "Billings", 1, null),
        (2, "Stacey", "Reinhart", 6, null),
        (3, "Jessica", "Norman", 4, null),
        (4, "Laci", "Burm", 2, 1),
        (5, "Burt", "Heineke", 2, 1),
        (6, "Paul", "Uptopolis", 3, 4),
        (7, "Olivia", "Robinson", 3, 4),
        (8, "Lei", "Smart", 3, 5),
        (9, "Porter", "Murtaugh", 5, 3),
        (10, "Amy", "Copperfield", 5, 3), 
        (11, "Justice", "Eclipse", 7, 2),
        (12, "Sailor", "Tirade", 7, 2),
        (13, "Martie", "Macintosh", 8, 11),
        (14, "Sprite", "Phillips", 8, 11), 
        (15, "Howard", "Victorious", 8, 12),
        (16, "Remus", "Vondercaut", 8, 12),
        (17, "Bernard", "Flint", 8, 12);
