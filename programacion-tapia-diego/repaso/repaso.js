//construir una funcion que imprime una alerta en navegador
const mifuncion = () =>{
   const d1 = document.querySelector("#inp_d1").value;
   const d2 = document.querySelector("#inp_d2").value;

   const resultado = parseInt (d1) + parseInt (d2);

   alert(resultado);
}

//identificar el boton a traves de su id
const btn=document.querySelector("#btn_probar");

//cuando se haga click en el boton se ejecuta la funcion
btn.addEventListener("click", mifuncion);
