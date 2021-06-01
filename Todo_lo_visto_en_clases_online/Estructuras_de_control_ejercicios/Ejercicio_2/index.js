const mostrar = () => {
    const sabor = window.prompt("Ingrese topping");
    let helado = 250;
    if(sabor == 'oreo'){
        let total = helado + 40;
        document.write('Total a pagar: '+total);
    }else{
        if (sabor == 'kitkat') {
            let total1 = helado + 55;
            document.write('Total a pagar: '+total1);
        }else{
            if (sabor == 'brownie'){
                let total2 = helado + 65;
                document.write('Total a pagar: '+total2);
            }else{
                if (sabor == 'rocklets') {
                    let total3 = helado + 75; 
                    document.write('Total a pagar: '+total3);
                }else{
                    if (sabor == '') {
                        document.write('Total a pagar sin topping: '+helado);
                       
                    }else{
                        document.write('no tenemos este topping, lo sentimos.');
                    }
                    
                }
            }
        }
    }
}

const boton = document.querySelector("#btn_mostrar");
boton.addEventListener("click", mostrar); 