const calcular=(numero)=>{
    let mensaje= '';
    let resto = numero % 2;
    if (resto==0) {
        mensaje = 'El numero es PAR '+numero;
    }else{
        mensaje = 'El numero es IMPAR '+numero;
    }
    
    return mensaje;
}
const verificar = () =>{
    let num= document.getElementById("inp_dato").value;
    const respuesta = calcular(num);
    document.getElementById("p_resultado").textContent = respuesta;

}
const boton = document.getElementById("btn_calcular");
boton.addEventListener("click", verificar);


