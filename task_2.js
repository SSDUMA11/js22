

let salaries = {
    fronted: 12000,
    backend: 10000,
    designer: 8000,
    dayPay() {
        alert('We must pay salary on Tuesday!');
    },

    total() {
        let sum = 0
        for (const key in salaries){
            sum+= this [key] }
            
        
    }
}
 console.log(sum); 
 salaries.manager=5000;
 salaries.total();

// let expensese = salaries;
// salaries = {};

// expensese.total() 
// let sum = this.fronted + this.backend + this.designer + this.manager;