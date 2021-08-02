import Empleado from "./empleado.js";
const enviar_datos = () => {
    const nombre = document.getElementById("inp_nombre").value;
    const apellido = document.getElementById("inp_apellido").value;
    const dni = document.getElementById("inp_dni").value;
    //creamos la instancia empleado
    const empleado = new Empleado(nombre,apellido,dni);

    //ejecutarmos el metodo guardarEmpleado
    empleado.guardarEmpleado();

}
const btn = document.getElementById("btn_guardar");
btn.addEventListener("click",enviar_datos);