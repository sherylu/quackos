module.exports = {
  attributes: {
    idRecurso: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },
    
    idPersona: {
      model: 'Persona'
    },
    
    nombreRecurso: {
        type: 'string'
    },
    
    marcaRecurso: {
        type: 'string'
    },

    estadoRecurso: {
        type: 'string'
    },
    
    descripcionRecurso: {
        type: 'string'
    },
  }
};