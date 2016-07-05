/**
 * Persona.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idPersona: {
        type: 'int',
        primaryKey: true,
        autoIncrement: true,
        size: 3,
        columnName: 'Id_Persona'
            },
    cedulaPersona:{
                type:'string'
            },
    nombrePersona:{
                type:'string'
            },
    apellidoPersona:{
                type:'string'
            },
    correoPersona:{
                type:'string'
            },
    celularPersona:{
                type:'string'
            },
    estudiantes:{
                collection: 'Estudiante',
                via: 'idEstudiante'
            },
    profesor:{
                collection: 'Profesor',
                via: 'idProfesor'
            }
  

  }
};

