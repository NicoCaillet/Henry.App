module.exports = {
    Cohorte:[
        {
            //id: 1,
            fecha: Date.now(),
            nombre: "Webft-03"
        },
        {
            //id: 2,
            fecha: Date.now(),
            nombre: "Webft-04"
        },
        {
            //id: 3,
            fecha: Date.now(),
            nombre: "Webft-05"
        },
    ],
    Grupo:[
        {
            //id: 1,
            cohorteId: 1,
        },
        {
            //id: 2,
            cohorteId: 1,
        },
        {
            //id: 3,
            cohorteId: 1,
        },
        {
            //id: 4,
            cohorteId: 2,
        },
        {
            //id: 5,
            cohorteId: 2,
        },
        {
            //id: 6,
            cohorteId: 2,
        },
        {
            //id: 7,
            cohorteId: 3,
        },
        {
            //id: 8,
            cohorteId: 3,
        },
    ],
    Clase:[
        {
            //id:1,
            modulo: "m2",
            clase : "DOM - Selectores",
            link: "https://player.vimeo.com/video/412450156"
        },
        { 
            //id: 2,
            modulo: "m2",
            clase: 'CSS Avanzado', 
            link: 'https://player.vimeo.com/video/412450067' 
        },
        { 
            //id: 3,
            modulo: "m2",
            clase: 'ES6', 
            link: "https://player.vimeo.com/video/414741680" 
        },
        { 
            //id: 4, 
            clase: 'AJAX', 
            modulo: "m2",
            link: "https://player.vimeo.com/video/412449982" 
        }
    ],
    Pair:[
        {
          //id: 1,
          alumnos: 6,
        },
        {
            //id: 2,
            alumnos: 6,
        }
    ],









    // TODO DE LO QUE USUARIO DEPENDA EJ:Cohortes, Grupo, etc. Va arriba.  
    Usuario:[
        {
            nombre: "Admin",
            apellido: "Henry",
            edad : 0,
            rol: "director",
            localidad: "BsAs",
            active: true,
            password: "1234",
            email: "admin@henry.com",
        },
        {
            nombre: "Alumno1",
            apellido: "Henry",
            edad : 18,
            rol: "alumno",
            localidad: "BsAs",
            active: true,
            password: "1234",
            email: "alumno1@henry.com",
            proceso : 1,
            cohorteId: 1,
            grupoId: 1,
            pairId: 1
        },
        {
            nombre: "Alumno2",
            apellido: "Henry",
            edad : 18,
            rol: "alumno",
            localidad: "BsAs",
            active: true,
            password: "1234",
            email: "alumno2@henry.com",
            proceso : 1,
        },
        {
            nombre: "Pm1",
            apellido: "Henry",
            edad : 18,
            rol: "pm",
            localidad: "BsAs",
            active: true,
            password: "1234",
            email: "pm1@henry.com",
            cohorteId: 1,
            grupoId: 1,
            pairId: 1,
        }
    ],
    
}
