let salaries = {
    fronted: 12000,
    backend: 10000,
    designer: 8000,
  
    total (){
        let sum= 0;
        for (let key in salaries){
            let value=this[key]
            if(typeof value === 'number'){
                sum += value   
            }
        } 
        return sum   
    }
}
 console.log(salaries.total()); 
 salaries.manager=5000;
 console.log(salaries.total()); 
 