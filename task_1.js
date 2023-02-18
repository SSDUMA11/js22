let car = {
    model: 'BMW',
    year: 2020,
    color: 'black', 
    signal(){
        alert('fa! fa!');
    },
}
car.signal();
car.color = 'white';
console.log(car.color);
car.type = "electric";
console.log(car.type);