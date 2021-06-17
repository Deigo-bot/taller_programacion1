
const sumar = (numero1, numero2) => {
    let mensaje= '';
   let sumatoria= parseInt(numero1) +parseInt(numero2);
   console.log("La suma es: ", sumatoria);
   let respuesta = Math.sign(sumatoria);
    if (respuesta == 1) {
        mensaje= 'El numero es positivo '+sumatoria;
    }else{
        if (respuesta == -1) {
            mensaje= 'El numero es negativo'+sumatoria;
        }else{
            mensaje='El numero es nulo'+sumatoria;
        }
    }
    return mensaje;
}
const guardar = () =>{
    let valor_1 = document.getElementById("inp_1").value;
    let valor_2 = document.getElementById("inp_2").value;
    const respuesta = sumar(valor_1, valor_2);
    
    document.getElementById("parrafo").textContent = respuesta;
    
}
const boton = document.getElementById("btn_calcular"); 
boton.addEventListener("click",guardar);




