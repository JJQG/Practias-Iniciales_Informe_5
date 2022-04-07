CREATE DATABASE usuarios;
USE usuarios;

CREATE TABLE usuario(
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
registro VARCHAR(10),
nombre VARCHAR(30),
apellido VARCHAR(30),
contraseña VARCHAR(10),
correo VARCHAR(30)
);

DESCRIBE usuario;

