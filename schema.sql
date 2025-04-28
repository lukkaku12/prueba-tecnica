CREATE TABLE author (
    id INT PRIMARY KEY AUTO_INCREMENT,
    author_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    birth_date DATE NOT NULL
);

CREATE TABLE user (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE book (
    id INT PRIMARY KEY AUTO_INCREMENT,
    author_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    date_created DATE NOT NULL,
    isAvailable BOOLEAN NOT NULL,
    FOREIGN KEY (author_id) REFERENCES author(id)
);

CREATE TABLE book_copies (
    id INT PRIMARY KEY AUTO_INCREMENT,
    book_id INT NOT NULL,
    availability ENUM('available', 'borrowed') NOT NULL,
    FOREIGN KEY (book_id) REFERENCES book(id)
);

CREATE TABLE borrowings (
    id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT NOT NULL,
    copy_id INT NOT NULL,
    borrowing_date DATE NOT NULL,
    borrowing_deadline DATE NOT NULL,
    returned_at DATE,
    FOREIGN KEY (user_id) REFERENCES user(id),
    FOREIGN KEY (copy_id) REFERENCES book_copies(id)
);