export class Product{
    constructor(id,name,price,color){
        this.id = id;
        this.name = name;
        this.price = price;
        this.color = color;
   }
}

export let productCategory = 'Kalle' //Useless men exempel på 
            //exportera variabel

//bara function = private
//export = public
export function isGoodProduct(id){
    console.log('Nu körs jag')
    if (id == 12) return true;
    return false;
}

