export default class Bhaskara{
    datoa;
    datob;
    datoc;
    constructor(da,db,dc)
    {
        this.datoa = da;
        this.datob = db;
        this.datoc = dc;
    }
    calcular_raices()
    {
        let resultado1= parseInt(this.datoa) * parseInt(this.datob) * parseInt(this.datoc) 
        console.log(resultado1);
    }
}