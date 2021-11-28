INSERT INTO department (name)
VALUES  ("Marketing"),
        ("Human Resources"),
        ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES  ("Chief Marketing Officer", "400000", 1),
        ("Marketing Manager", "120000", 1),
        ("Junior Marketing Agent", "65000", 1),
        ("Head of Human Resources", "150000", 2),
        ("Human Resources Officer", "65000", 2),
        ("Chief Engineer", "250000", 3),
        ("Senior Engineer", "150000", 3),
        ("Junior Engineer", "75000", 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("Lauren", "Billings", 1, null),
        ("Stacey", "Reinhart", 6, null),
        ("Jessica", "Norman", 4, null),
        ("Laci", "Burm", 2, 1),
        ("Burt", "Heineke", 2, 1),
        ("Paul", "Uptopolis", 3, 4),
        ("Olivia", "Robinson", 3, 4),
        ("Lei", "Smart", 3, 5),
        ("Porter", "Murtaugh", 5, 3),
        ("Amy", "Copperfield", 5, 3), 
        ("Justice", "Eclipse", 7, 2),
        ("Sailor", "Tirade", 7, 2),
        ("Martie", "Macintosh", 8, 11),
        ("Sprite", "Phillips", 8, 11), 
        ("Howard", "Victorious", 8, 12),
        ("Remus", "Vondercaut", 8, 12),
        ("Bernard", "Flint", 8, 12);
