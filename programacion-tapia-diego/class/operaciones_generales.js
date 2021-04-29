import Auto from './auto';

//creamos la instancia de la clase auto.
const auto = new Auto();

//auto.arranque();

const btn_aranque = document.querySelector("#btn_arranque");

btn_aranque.addEventListener("click",auto.arranque());