const arreglar = () =>{   
    const productos = {
        compania: 'Google',
        productos: {
        office: {
            prod1: 'Google Docs',
            prod2: 'Google Sheets',
            prod3: 'Google Slides'
        },
        general: {
        prod1:'Youtube',
        prod2: 'Google Drive',
        prod3: 'Google Meet'
        }
        }
    } 

    let mensaje= `
    Los productos ofirmaticos: ${productos.productos.office.prod1}, ${productos.productos.office.prod2}, ${productos.productos.office.prod3}
    
    `;
    document.getElementById("parrafo1").textContent=mensaje;
    let mensajeria= `
    Los productos generales: ${productos.productos.general.prod1}, ${productos.productos.general.prod2}, ${productos.productos.general.prod3}
    `;
    document.getElementById("parrafo2").textContent=mensajeria;
} 

    const boton = document.getElementById("btn_mostrar"); 
    boton.addEventListener("click", arreglar);