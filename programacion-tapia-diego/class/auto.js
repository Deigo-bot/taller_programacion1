class Auto {
    //Declaro los atributos de clase.
    precio = '$1.000.000,00'
    motor;
    constructor(mar,mod)
    {
        this.marca = mar;
        this.modelo = mod;
    }

    arranque() {
        console.log(`
        Marca: ${this.marca}
        Modelo: ${this.modelo}
        Precio: ${this.precio}
        Motor: ${this.motor}
        `);
    }
}
//creo instancia de la clase pero tambien se ejecuta el constructor
const auto = new Auto('Fiat','Argo');
auto.motor = '1.4 TSI';
//aca con la instancia ejecuto el metodo arranque
auto.arranque();
//Exportando esta clase, esta visible para los demas archivos.
//module.exports = Auto;