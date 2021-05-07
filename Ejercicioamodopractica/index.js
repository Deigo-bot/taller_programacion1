const calcular = () =>{
    const valor_operacion = document.querySelector("#slt_operacion").value;
    const parrafo = document.querySelector("#p_valor_operacion");
    const input1 = document.querySelector("#inp_d1").value;
    const input2 = document.querySelector("#inp_d2").value;
    if(valor_operacion==0)
    {
        const intensidad= input1/input2;
        parrafo.textContent = `
        El resultado de la intensidad es: ${intensidad}
        `
    }else
    {
        if(valor_operacion==1)
        {
            const tension= input1*input2;
            parrafo.textContent = `
            El resultado de la intensidad es: ${tension}
            `
        }else
        {
            const resistencia= input1/input2;
            parrafo.textContent = `
            El resultado de la intensidad es: ${resistencia}
            `
        }
    }
}
const cambiar_label = () =>{
    const select = document.querySelector("#slt_operacion").value;
    const label1= document.querySelector("#lbl_d1");
    const label2 = document.querySelector("#lbl_d2");

    if(select==0)
    {
        label1.textContent = 'V(tension)';
        label2.textContent = 'R(resistencia)';
    }else{
        if(select==1)
        {
            label1.textContent = 'I(intensidad)';
            label2.textContent = 'R(resistencia)';
        }else{
            label1.textContent = 'V(tension)';
            label2.textContent = 'R(resistencia)';
        }
    }
}
const select = document.querySelector("#slt_operacion");
select.addEventListener("change", cambiar_label);
const btn = document.querySelector("#btn_resultado");
btn.addEventListener("click",calcular);