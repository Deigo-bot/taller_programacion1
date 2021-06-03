const construir_catalogo = async () =>{
    //fech esta llevando una peticion http a traves del metodo GET
    const resultado = await fetch("https://jsonplaceholder.typicode.com/photos?albumId=10");
    const fotografias = await resultado.json(); 
    const total_columnas = [];
    fotografias.forEach(element => {
        const columna = `
        <div class="col-lg-3 mb-3">
            <div class="card">
                <img src="${element.url}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                    
                    <a href="#" class="btn btn-primary">Agregar al carrito</a>
                </div>
            </div>
        </div>
        `;
        total_columnas.push(columna);
    });

    const row = document.getElementById("row_catalogo");
    row.innerHTML = total_columnas.join("");

}
const boton = document.getElementById("btn_mostrar"); 
boton.addEventListener("click", construir_catalogo);