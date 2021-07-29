import Matematica from './matematica.js' 
const operar = () =>{
    
    let d1 = document.getElementById("inp_d1").value; 
    let d2 = document.getElementById("inp_d2").value;
    const mat = new Matematica(d1,d2)
    //mat.dato1 = document.getElementById("inp_d1").value; 
    //mat.dato2 = document.getElementById("inp_d2").value; 
    mat.sumar()
}
const btn = document.getElementById("btn_operar");
btn.addEventListener("click", operar); 

//aca inicia el otro ejercicio
import Bhaskara from './bhaskara.js'
const calcular = () =>{
    let da = document.getElementById("inp_a").value; 
    let db = document.getElementById("inp_b").value;
    let dc = document.getElementById("inp_c").value; 
    const bhas = new Bhaskara(da,db,dc)
    bhas.calcular_raices()
}
const btn1 = document.getElementById("btn_calcular");
btn1.addEventListener("click", calcular);  