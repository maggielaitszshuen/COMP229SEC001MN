console.log('class');
class Vehicle {
    constructor(wheels) {
    this.wheels = wheels;
    }
    toString() {
    return '(' + this.wheels + ')';
    }
}

class Car extends Vehicle {
    constructor(color) {
    super(4);
    this.color = color;
    }
    toString() {
    return super.toString() + ' colored: ' + this.color;
    }
}

let car = new Car('blue');
    
car.toString();
console.log(car instanceof Car);
console.log(car instanceof Vehicle);

console.log('const');
function reinitConst(){
    const me = 1;
    console.log(me);
    //me = 2;
    //console.log(me);
}

reinitConst();

console.log('let');
function reinitConst2(){
    let me2 = 1;
    console.log(me2);
    me2 = 2;
    console.log(me2);
}

reinitConst2();

console.log('iterateVar');
function iterateVar() {
    for(var i = 0; i < 10; i++) {
        console.log(i);
    }
    console.log(i);
}
iterateVar();

console.log('iterateLet');
function iterateLet() {
    for (let i = 0; i < 10; i++){
        console.log(i);
    }
    //console.log(i);
}
iterateLet();