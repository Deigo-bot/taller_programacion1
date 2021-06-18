const promediar = (arreglo) => {
   
        
        
        let cantidad_numeros = arreglo.length;   
        let suma=0;
        arreglo.forEach (element =>{
               
               suma =suma+element;
        });
        
        let total= suma/cantidad_numeros;
        let mensaje= 'El promedio es '+total;
        return mensaje;
}
const mostrar = () =>{
    let arreglo = [88,11,21,25,36];
    
    const respuesta = promediar(arreglo);   
    document.getElementById("parrafo").textContent = respuesta;
        
    
}
const boton = document.getElementById("btn_mostrar"); 
boton.addEventListener("click",mostrar);