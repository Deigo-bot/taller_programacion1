const calcular = () =>{
    
    const valor_numero = document.querySelector("#inp_numero").value;
    
    
   let mensaje= '';
    if(valor_numero < 0)
    {
        mensaje = 'El numero es negativo';
        
    }else{
        if(valor_numero > 0){
        mensaje = 'El numero es positivo';
        
        }else{
            mensaje ='El numero es nulo';
            
        }
    }
    console.log(mensaje);
}
const boton = document.querySelector("#btn_calcular")
boton.addEventListener("click", calcular)
