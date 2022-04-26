CREATE TABLE IF NOT EXISTS animals (
    animal_id INT AUTO_INCREMENT PRIMARY KEY,
    description VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)  ENGINE=INNODB;

INSERT INTO animals VALUES (1, 'Dog', NOW());
INSERT INTO animals VALUES (2, 'Cat', NOW());

SELECT * FROM animals;