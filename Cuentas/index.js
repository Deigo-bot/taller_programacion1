import Cuenta from "./cuenta.js";
import Empleado from "./cuenta.js";
const almacenar = () =>{
    const usuario = document.getElementById("inp_usuario").value;
    const pasword = document.getElementById("inp_contraseña").value;
    
    
    const instancia = new Cuenta(usuario,pasword)

    

}
const btn = document.getElementById("btn_guardar")
btn.addEventListener("click",almacenar);