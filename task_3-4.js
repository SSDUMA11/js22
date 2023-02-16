
function Computer(brand, system, cost){

    this.brand = brand;
    this.system = system;
    this.cost = cost;

    this[Symbol.toPrimitive] = function (hint){
        console.log(hint); 
        switch(hint){
            case 'string':
                return this.brand
            case 'number':
                return this.cost
            case 'default':
                return  ' '+ this.brand + ' ' + this.system + ' '+ this.cost + ' ' + '//' 
        }
    }

}

let dell = new Computer('Dell', 'windows', 800);
let aplle = new Computer('Aplle', 'NAC OS', 1700);
let group = {};

console.log(dell + aplle);
console.log(+aplle ); 
console.log(String(dell));

