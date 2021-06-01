const mostrar = () => {
    const respuesta = window.prompt("¿Usted es culpable?");
    
    if(respuesta == 'si'){
        document.write('irás a la cárcel.')
    }else{
        if (respuesta == 'no') {
            document.write('irás a casa.')
        }else{
            document.write('la documentación por favor.')
        }
    }
}

const boton = document.querySelector("#btn_mostrar");
boton.addEventListener("click", mostrar); 