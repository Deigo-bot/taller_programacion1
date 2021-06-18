const calcular = () => {
    
    let base = document.getElementById("inp_base").value;
    let altura = document.getElementById("inp_altura").value;
    let multiplicacion = base*altura;
    let resultado = multiplicacion/2;
    let mensaje = 'El area del triangulo es: '+resultado;
    document.getElementById("parrafo").textContent = mensaje;
}
const boton = document.getElementById("btn_mostrar"); 
boton.addEventListener("click",calcular);