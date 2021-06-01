//funcion clasica

function sumar() {
    alert('Nah broma');
}

//funcion flecha

const restar = () => {
    alert('Resta');
    console.log('Testeame esta');
    sumar(); //asi llamamos a la funcion de arriba 
}

const multiplicar = () => alert('Multiplica');
//funciones fleche con parametros
const sumar1 = (dato1, dato2) => {
    let resultado = dato1 + dato2;
    alert(resultado);
}

const retornar = (horario) => {
    let hora_actual = 'Horario actual' + horario;
    return hora_actual;
}

//aca estamos ejecutando la funcion de arriba
const respuesta = retornar('16:18HS');
console.log(respuesta);