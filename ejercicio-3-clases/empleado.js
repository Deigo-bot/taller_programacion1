export default class Empleado {
    nombre;
    apellido;
    dni; 

    constructor(nom,ape,dni)
    {
        this.nombre = nom;
        this.apellido = ape;
        this.dni = dni;
    }

    guardarEmpleado()
    {
        console.log(`
            Nombre: ${this.nombre}
            Apellido ${this.apellido}
            Dni ${this.dni}
        `);
    }
}