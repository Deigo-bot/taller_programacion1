var mis_tareas=[]
const listar = () => {
    let lista_items=[];
    mis_tareas.forEach(element => {
        let item = `
        <li class="list-group-item d-flex justify-content-between align-items-start">
            <div class="ms-2 me-auto">
                <div class="fw-bold">${element.tarea}</div>
         
            </div>
            <span class="badge bg-primary rounded-pill">${element.tiempo}</span>
        </li>
        `;
        lista_items.push(item)

    });
    document.getElementById("mistareas").innerHTML = lista_items.join("");
}
const guardar = () =>{
    const ta = document.getElementById("inp_tarea").value;
    const ti = document.getElementById("inp_tiempo").value;
    const nueva_tarea = {
        tarea: ta,
        tiempo: ti
    }
    mis_tareas.push(nueva_tarea)
    listar();
}
const boton = document.getElementById("btn_guardar"); 
boton.addEventListener("click",guardar);