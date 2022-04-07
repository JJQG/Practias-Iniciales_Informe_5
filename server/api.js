'use strict';
const express = require("express");
const mysql = require('mysql');
const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'aplicacion'
};

// Create a MySQL pool
var pool = mysql.createConnection(config);
// Export the pool
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '5mb', extended: true }));
var cors = require('cors');
app.use(cors());



pool.connect(function(err) {

    if (err) {
        console.error('Error de conexion: ' + err.stack);
        return;
    }
    console.log('Conectado con el identificador ' + pool.threadId);

});

// Display all alumnos
app.get('/publicaciones', (request, response) => {
    let datos = [];
    pool.query('SELECT * FROM publicaciones', (error, results) => {
        if (error) throw error;
 
        results.forEach(result => {
            console.log(result);
            datos.push(result);
        });
        response.send(datos);
    });
});
app.get('/alumnos', (request, response) => {
    let datos = [];
    pool.query('SELECT * FROM alumnos', (error, results) => {
        if (error) throw error;
 
        results.forEach(result => {
            console.log(result);
            datos.push(result);
        });
        response.send(datos);
    });
});
app.get('/alumno/:user', (request, response) => {
    const {user} = request.params;
    let datos = [];
    pool.query('SELECT * FROM alumnos where idAlumno = ? ',[user], (error, results) => {
        if (error) throw error;
 
        results.forEach(result => {
            console.log(result);
            datos.push(result);
        });
        response.send(results);
    });
});
app.get('/alumno/:user/:pass', (request, response) => {
    const {user} = request.params;
    const {pass} = request.params;
    let datos = [];
    pool.query('SELECT * FROM alumnos where idAlumno = ? ',[user], (error, results) => {
        if (error) throw error;
 
        results.forEach(result => {
            console.log(result);
            datos.push(result);
        });
        response.send(results);
        console.log(pass, user)
    });
});

//modificar usuario *
app.post('/newUser', (req, res)  => {
    let usuario = {
        idAlumno : '',
        nombres : '',
        apellidos: '',
        contraseña: '', 
        email: ''
        
       };

       usuario = {
        idAlumno : req.body.idAlumno,
        nombres : req.body.nombres,
        apellidos: req.body.apellidos,
        contraseña: req.body.contraseña,
        email: req.body.email
     };

    console.log(req.body);
    pool.query('insert into alumnos set=?',[usuario.body], (error, results) => {
        if(error!= null){
            return res.send(error);
            
        }else{

        return res.send(req.body);}
    

});
}); 


//modificar usuario *
app.put('/modifysuer', (req, res)  => {
  
    let usuario = {
        idAlumno : '',
        nombres : '',
        apellidos: '',
        contraseña: '', 
        email: ''
        
       };

       console.log(req.body);

    if(!req.body.ID) {
        var  respuesta = {
         error: true,
         codigo: 502,
         mensaje: 'Usuario original requerido'
        };
        res.send(respuesta);

       } else {


var uptname = 0;

            usuario = {
                idAlumno : req.body.ID,
                nombres : req.body.nombre,
                apellidos: req.body.apellido,
                contraseña: req.body.password,
                email: req.body.correo
             };

        if(usuario.nombres != ""){

            pool.query('UPDATE alumnos  SET nombre = ? WHERE idAlumno = ?', [usuario.nombres, usuario.ID], function (error, result, fields){
                if(error!= null){
                    uptname = -1;
                }else{
                    console.log("nombre upt");
                    uptname = 1;
                    var respuesta2 = {
                        error: false,
                        codigo: 200,
                        mensaje: 'Usuario actualizado',
                        update: usuario.ID
                   };
                   console.log(respuesta2);
                   res.send(respuesta2);
                }
            } );
            pool.query('UPDATE alumno  SET apellido = ? WHERE ID = ?', [usuario.apellidos, usuario.ID], function (error, result, fields){
                if(error!= null){
                    uptname = -1;
                }else{
                    console.log("nombre upt");
                    uptname = 1;
                    var respuesta2 = {
                        error: false,
                        codigo: 200,
                        mensaje: 'Usuario actualizado',
                        update: usuario.ID
                   };
                   console.log(respuesta2);
                   res.send(respuesta2);
                }
            } );
            pool.query('UPDATE alumno  SET nombre = ? WHERE ID = ?', [usuario.pssw, usuario.ID], function (error, result, fields){
                if(error!= null){
                    uptname = -1;
                }else{
                    console.log("nombre upt");
                    uptname = 1;
                    var respuesta2 = {
                        error: false,
                        codigo: 200,
                        mensaje: 'Usuario actualizado',
                        update: usuario.ID
                   };
                   console.log(respuesta2);
                   res.send(respuesta2);
                }
            } );
            pool.query('UPDATE alumno  SET nombre = ? WHERE ID = ?', [usuario.correo, usuario.ID], function (error, result, fields){
                if(error!= null){
                    uptname = -1;
                }else{
                    console.log("nombre upt");
                    uptname = 1;
                    var respuesta2 = {
                        error: false,
                        codigo: 200,
                        mensaje: 'Usuario actualizado',
                        update: usuario.ID
                   };
                   console.log(respuesta2);
                   res.send(respuesta2);
                }
            } );

        }
 

        
       }

});



//listener de nuestra API
app.listen(3050, () => {
    console.log("El servidor está inicializado en el puerto 3000");
   });