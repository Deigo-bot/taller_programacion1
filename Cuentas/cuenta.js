export default class Cuenta{
    usuario;
    pasword;
    
    constructor(u,p)
    {
        this.usuario = u;
        this.pasword = p;
        
    }
    guardarCuenta()
    {
        let cuenta = {
            usuario: this.usuario,
            pasword: this.pasword
        }
        let lista = [];
        if ("cuenta" in localStorage) {

            lista = JSON.parse(localStorage.getItem("cuenta"));
            
            lista.push(cuenta);
            //console.log(this.usuario);
            localStorage.setItem("cuenta",JSON.stringify(lista));
        }else{
            lista.push(cuenta);
            localStorage.setItem("cuenta",JSON.stringify(lista));
        }
        
        
    }
    listarCuentas()
    {
        let lista = [];
        lista = JSON.parse(localStorage.getItem("cuenta"));
        return lista;
    }
    
}