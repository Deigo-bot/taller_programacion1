const mostrararreglo = () => {
    let clasificaciones = ['Ana','Oswaldo','Raul','Celia','Maria','Antonio'];
        document.write(`
        1 puesto: ${clasificaciones[0]}
        2 puesto: ${clasificaciones[1]}
        3 puesto: ${clasificaciones[2]}
        `);
    clasificaciones.forEach (element =>{
           console.log("Usando forEach: "+element);
    });
    for (let indice in clasificaciones) {
        
        console.log("Usando for: "+clasificaciones[indice]);
    }
    
}
const boton = document.querySelector("#btn_mostrar");
boton.addEventListener("click", mostrararreglo);