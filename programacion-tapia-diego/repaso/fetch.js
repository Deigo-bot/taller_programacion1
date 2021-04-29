
//async y await
const ObtenerPokemones = async () =>{
    const Respuesta = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await Respuesta.json();
    
    data.results.forEach(objeto => {
        console.log(objeto.name);
    });
}
const btn_poke = document.querySelector("#btn_poke");
btn_poke.addEventListener("click", ObtenerPokemones);


//Pequeño repaso rapido de objetos
const miObjeto = {
    //Propiedades del objeto con la ',' se pueden seguir poniendo  abajo 
    taller: 'Programacion 1',
    curso: '5to año',
    contenidos:{
        tema1:'Variables',
        tema2:'Funciones',
        tema3:'Objetos'
    }
}
//asi se accede a la propiedad taller
console.log(miObjeto.taller);

console.log(`
Los contenidos del taller son: 
    - ${miObjeto.contenidos.tema1}
    - ${miObjeto.contenidos.tema2}
    - ${miObjeto.contenidos.tema3}
`)