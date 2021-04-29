const obtenerUsuario = async () =>{
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
    const data2 = await respuesta.json();
    
    data2.forEach(objeto => {
        console.log(`
        Usuarios ${objeto.name}
        Emails ${objeto.email}
        citys ${objeto.address.city}
        
        `);
    });
 
}
const btn_usuario = document.querySelector("#btn_usuario");
btn_usuario.addEventListener("click", obtenerUsuario);
