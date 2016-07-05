/**
 * Vuelo.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idProfesor: {
        type: 'int',
        primaryKey: true,
        autoIncrement: true,
        size: 3,
        columnName: 'Id_Profesor'
   },
  descripcionProfesor:{
        type: 'string'
   },
   idPersona:{
          model:'Persona',
          unique: true
      },
    curso:{
                collection: 'Curso',
                via: 'idCurso'
            }
      
  }
};

