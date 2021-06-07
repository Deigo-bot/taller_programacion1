let marcas = ["Ford", "Renault", "Volkswagen", "Seat", "Peugeot","Chevrolet", "Fiat", "Toyota", "Chery"];
const mostrar_longitud = () =>{
    

    console.log(marcas.length);
    
    
    
}
const acceder_elemento = () =>{
    
    let primero = marcas[0]
    console.log(primero);

    let ultimo = marcas[marcas.length - 1]
    console.log(ultimo);
    
}
const recorrer_arreglo = () =>{
    
    marcas.forEach((elemento, indice, marcas)=> {
        console.log(elemento, indice);
    })
    
}
const agregar_elemento = () =>{
    
    let nuevaLongitud = marcas.push('Audi')
    console.log(nuevaLongitud);
    
}
const eliminar_elemento = () =>{
    let ultimo = marcas.pop()
    console.log(ultimo);
}
const anadir_primer_elemento = () =>{
    let nuevaLongitud = marcas.unshift('Ferrari')
    console.log(nuevaLongitud);
}
const eliminar_primer_elemento = () =>{
    let primero = marcas.shift()
    console.log(primero);
}
const encontrar_indice = () =>{
    marcas.push('Porch')


    let pos = marcas.indexOf('Toyota')
    console.log(pos);
}
const eliminar_unico_elemento = () =>{
    let pos = 2;
    let elementoEliminado = marcas.splice(pos, 1);
    console.log(elementoEliminado);
}
const eliminar_varios_elementos = () =>{
   
    


    let pos = 1, numElementos = 2

    let elementosEliminados = otrostipos.splice(pos, numElementos)


    console.log(elementosEliminados)
    console.log(marcas)

}
const copiar_array = () =>{
    let copiaArray = marcas.slice();
    console.log(copiaArray);

}
    const boton1 = document.getElementById("btn_agregar"); 
    boton1.addEventListener("click", agregar_elemento);
    const boton2 = document.getElementById("btn_recorrer"); 
    boton2.addEventListener("click", recorrer_arreglo);
    const boton3 = document.getElementById("btn_elemento"); 
    boton3.addEventListener("click", acceder_elemento);
    const boton4 = document.getElementById("btn_crear"); 
    boton4.addEventListener("click", mostrar_longitud);
    const boton5 = document.getElementById("btn_eliminar");
    boton5.addEventListener("click", eliminar_elemento);
    const boton6 = document.getElementById("btn_añadir");
    boton6.addEventListener("click", anadir_primer_elemento);
    const boton7 = document.getElementById("btn_eliminar_primer");
    boton7.addEventListener("click", eliminar_primer_elemento);
    const boton8 = document.getElementById("btn_encontrar_indice");
    boton8.addEventListener("click", encontrar_indice);
    const boton9 = document.getElementById("btn_unico_elemento");
    boton9.addEventListener("click", eliminar_unico_elemento);
    const boton10 = document.getElementById("btn_eliminar_varios_elementos");
    boton10.addEventListener("click", eliminar_varios_elementos);
    const boton11 = document.getElementById("btn_copiar_array");
    boton11.addEventListener("click", copiar_array);

