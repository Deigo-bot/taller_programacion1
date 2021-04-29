class Taller {
    
    libreria_css;
    servicio_google;
    constructor(nom,len)
    {
        this.nombre_taller = nom;
        this.lenguaje_programacion = len;
    }

    mostrar_datos() {
        console.log(`
        Taller: ${this.nombre_taller}
        Lenguaje: ${this.lenguaje_programacion}
        Libreria css: ${this.libreria_css}
        Servicio google: ${this.servicio_google}
        `);
    }
}

const taller = new Taller('Programacion','Javacript');
taller.libreria_css = 'boostrap';
taller.servicio_google = 'Firebase'

taller.mostrar_datos();