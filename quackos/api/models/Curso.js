module.exports = {
  attributes: {
          idCurso: {
 type: 'int',
 primaryKey: true,
 autoIncrement: true,
 size: 3,
 columnName: 'Id_Curso'
   },
         
    periodoAcademico: {
      type: 'string'
    },
    nombreCurso: {
      type: 'string'
    },
    horarioDias: {
      type: 'string'
    },
   horarioHoras: {
      type: 'string'
    },
    aulaCurso: {
      type: 'string'
    },
    Descripcion: {
      type: 'string'
    },
    // Add a reference to Pets
    idProfesor: {
      collection: 'Profesor'
    }
  }
};