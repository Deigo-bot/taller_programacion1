const calcular = () =>{
    const parrafo2 = document.querySelector("#p_valor_operacion2");
    const parrafo = document.querySelector("#p_valor_operacion");
    const input1 = document.querySelector("#inp_d1").value;
    const input2 = document.querySelector("#inp_d2").value;
    const input3 = document.querySelector("#inp_d3").value;
    const bloque1 = (Math.pow(input2,2))-(4*input3);
    const bloque2 = 2*input1;
    const raiz = Math.sqrt(bloque1);
    const bloque3 = raiz/bloque2;
    const resultado1 = -input2+bloque3;
    parrafo.textContent = `
        El resultado 1 es: ${resultado1}
        `
    const resultado2 = -input2-bloque3;
    parrafo2.textContent = `
        El resultado 2 es: ${resultado2}
        `
}


const btn = document.querySelector("#btn_resultado");
btn.addEventListener("click",calcular);