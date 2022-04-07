use aplicacion;

create table alumnos(
idAlumno int,
nombres varchar(25),
apellidos varchar(25),
contraseña varchar(15),
email varchar(30),
primary key(idAlumno)
);

create table catedraticos(
idCatedratico int,
nombre varchar(50),
cursos varchar(50),
primary key(idCatedratico)
);

create table cursos(
idCurso int,
nombre varchar(30),
catedraticos varchar(50),
primary key(idCurso)
);

create table publicaciones(
idPublicacion int, 
idAlumno int, 
idCurso int,
idCatedratico int,
publicacion varchar(500),
comentario varchar(500),
primary key(idPublicacion),
foreign key(idAlumno) references alumnos(idAlumno),
foreign key(idCurso) references cursos(idCurso),
foreign key(idCatedratico) references catedraticos(idCatedratico)
);

insert into `publicaciones` (idPublicacion,idAlumno,idCurso,idCatedratico, comentario) 
values (1,5,1,1,'este curso no es bueno'),(2,5,2,2,'el profesor es buenisimo'),(3,5,3,3,'recomendado en vacas'),(4,5,4,4,'si sale'),(5,5,5,5,'no sale'),(6,6,6,6,'con todo'),
(7,5,7,7,'buena onda el inge');


insert into `alumnos` (idAlumno,nombres,apellidos,contraseña,email) values (5,'Alan', 'Barillas','123','ttd@gmail.com'),(6,'Adrcandrian', 'Chosa','123','add@g.com'),(7,'Javier', 'GD','123','correo@cr.com'),(8,'Ortiz', 'Mike','123','cc@correo.com'),(9,'juan', 'Cifuentes','123','jc@correo.com'),(14,'Michael', 'Jackson','white','ttps@correo.com'),(15,'Juan', 'Polo','123','polo@correo.edu');
insert into `catedraticos` (idCatedratico, nombre, cursos) values (1,'Juan','IPC 2'),(2,'Miguel','LF'),(3,'Lopez','Orga'),(4,'Lucas','Practicas Iniciales'),(5,'Ester','Apli'),(6,'Ibia','Compi'),(7,'Lubia','Desarrollo');
insert into `alumnos` (idAlumno,nombres,apellidos,contraseña,email) values (51,'Ortencia','Sosa','546vffd','Sosa@correo.com'),(52,'Valentin','Estrada','54s654ds21d','Estrada@correo.com'),(53,'Ofelia','Salguero','564ddf','Salguero@correo.com'),(54,'Fernanda','Alvarez','ds3d1','Alvarez@correo.com'),(55,'Cons','Vela','ds514d1','Vela@correo.com'),(56,'Tel','Cel','54sdf5d','Cel@correo.com'),
(57,'Lupe','Ten','12321d','Ten@correo.com');

insert into `cursos` (idCurso,nombre,catedraticos) values (1,'IPC 2','Juan'),(2,'LF','Miguel'),(3,'Orga','Lopez'),(4,'Practicas Iniciales','Lucas'),(5,'Apli','Ester'),(6,'Compi','Ibia'),
(7,'Desarrollo','Lubia');
SELECT * from catedraticos;
SELECT * from cursos;
SELECT * from alumnos;
SELECT * from publicaciones;
