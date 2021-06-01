const mostrar_usuarios = async () => {
    const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await respuesta.json();
    
    const total_items = [];

    data.forEach(element => {
        let item =  `<li class="list-group-item">${element.name}</li>`
        total_items.push(item)
    });
    document.getElementById("ul_usuarios").innerHTML = total_items.join("");
}

const boton = document.getElementById("btn_mostrar");
boton.addEventListener("click", mostrar_usuarios);