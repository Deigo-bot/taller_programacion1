import Protocolo from './protocolo.js';
const guardar = () =>{
    const nombre = document.querySelector("#inp_d1").value;
    const apellido = document.querySelector("#inp_d2").value;
    const temperatura = document.querySelector("#inp_d3").value;
    
    const protocolo = new Protocolo()
    protocolo.mostrar(nombre, apellido, temperatura);
}
    const btn_proto=document.querySelector("#btn_protocolo");
    btn_proto.addEventListener("click", guardar);