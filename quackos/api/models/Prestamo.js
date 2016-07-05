module.exports ={
    attributes: {
        idPrestamo :{
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },
        idPersona :{
            model: 'Persona'
        },
        idRecurso :{
            model: 'Recurso'
        },
        fechaIni :{
            type: 'datetime'
        },
        fechaFin :{
            type: 'datetime'
        },
        costoPrestamo :{
            
        types:  {
            decimal2: function(number)
                    {
            return ((number *100)%1 === 0);
                        },
                },
        myNumber: {
                    type: 'float',
                    decimal2: true
                }
        },
        owner: {
            model: 'Persona'
        }
    }
}