const mensaje_clima = () =>{
    //aca indentificamos el select atravez de su id
    const valor_clima = document.querySelector("#slt_clima").value;
    //identificamos el parrafo atravez de su id
    const parrafo = document.querySelector("#p_descripcion_clima");

    var mensaje = '';
    if(valor_clima == 0)
    {
        mensaje = 'Cielo despejado, sin probabilidad de nubosidad';
        parrafo.textContent = mensaje;
    }else{
        if(valor_clima == 1){
        mensaje = 'Fuertes lluvias, con posibilidad de mejora durante la noche';
        parrafo.textContent = mensaje;
        }else{
            mensaje ='Cielo parcialmente nublado, con posibilidad de lluvias';
            parrafo.textContent = mensaje;
        }
    }
}
//aca simplemente encontramos a nuestro select, para despues escuchar sus cambios
const select = document.querySelector("#slt_clima");

//al seleccionar una opcion distinta del select, eso implica un cambio(change)
//cuando suceda el cambio ejecuto la funcion mensaje_clima()
select.addEventListener("change", mensaje_clima);