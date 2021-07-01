DROP DATABASE IF EXISTS `prueba`;
CREATE DATABASE `prueba`;
USE `prueba`;

CREATE TABLE IF NOT EXISTS items (
	nombre VARCHAR(100) NOT NULL,
    categoria VARCHAR(50) NOT NULL,
    stock INT UNSIGNED,
    id INT auto_increment primary key not null
);

INSERT INTO items (nombre, categoria, stock) VALUES
('Fideos', 'Harina', 20),
('Leche', 'Lácteos', 30),
('Crema', 'Lácteos', 15);

SELECT * FROM items;
DELETE FROM items where id=1;
SELECT * FROM items;
UPDATE items SET stock=45 WHERE id=2;
SELECT * FROM items;