const sumar = (numero1) => {
    
    let multiplicacion = Math.PI*numero1;
    let mensaje= 'El perimetro del circulo es: '+multiplicacion;
    return mensaje;
}
const guardar = () =>{
    let valor_1 = document.getElementById("inp_diametro").value;
    
    const respuesta = sumar(valor_1);
    
    document.getElementById("parrafo").textContent = respuesta;
    
}
const boton = document.getElementById("btn_mostrar"); 
boton.addEventListener("click",guardar);