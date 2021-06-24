let vacunas= ['Pfizer','Moderna','AztraZeneca','Sinopharm','Sputnik V','Sinovac','Covishield']
const sumar = () => {
    
    
    let mensaje= `
    La longitud del arreglo es: ${vacunas.length}
    El ultimo elemento del arreglo es: ${vacunas[6]}
    El tercer elemento del arreglo es: ${vacunas[3]}
    `;
    document.getElementById("p_mostrar").textContent=mensaje;
}
const boton = document.getElementById("btn_mostrar"); 
boton.addEventListener("click",sumar);

const recorrer = () =>{
    vacunas.forEach(function(elemento, indice, vacunas) {
        console.log(elemento, indice);
    })
    vacunas.push('Johnson & Johnson');
    
    console.log("El arreglo quedo asi: " +vacunas);
    let primero = vacunas.shift()
    console.log("Se elimino la primera vacuna: "+primero)
    vacunas.unshift('Novavax')
    console.log("El arreglo quedaria asi: "+vacunas);
    
    let pos=2;
    
    let elementoEliminado = vacunas.splice(pos, 2);
    
    
    console.log(`
    Eliminamos estas vacunas: ${elementoEliminado}
    
    `)

    document.write(`
    El arreglo con todo los cambios realizados quedaria asi: ${vacunas}
    `)
}
const boton1 = document.getElementById("btn_recorrer");
boton1.addEventListener("click", recorrer);










