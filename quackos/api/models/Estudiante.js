/**
 * Estudiante.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    idEstudiante: {
        type: 'int',
        primaryKey: true,
        autoIncrement: true,
        size: 3,
        columnName: 'Id_Estudiante'
            },
    numeroUnico:{
                type:'string'
            },
    asociadoEstudiante:{
                type:'boolean'
            },
    aportanteEstudiante:{
                type:'boolean'
            },
    semestreEstudiante:{
                type:'int'
            },
    idPersona:{
          model:'Persona',
          unique: true
      }

  }
};

