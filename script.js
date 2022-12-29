//Call Apply and Bind

// 1.use 'call' to call a function
var obj = {num:2 };  
var add =function (a){
    return this.num +a;
}
console.log(add.call(obj,3));

// 2.program using apply
var addArr = function(a,b,c,d,e,f,g,h){
    return this.num+a+b+c+d+e+f+g+h;
}
var arr =[1,2,3,4,5,6,7,8];
console.log(addArr.apply(obj,arr));

// 3.program using bind
var addBound = function(a,b,c,d){
    return this.num+a+b+c+d;
}

var bind = addBound.bind(obj);
console.log(bind(1,2,3,4)); 

//4.Create a new object called Student with age 20 , write a function which prints the age of the student from the student object.
//Dont pass in args. Read from 'this' and use BIND

var student ={age :22};
var printAge = function(a){
    console.log(a.age);
}
var bindAge = printAge.bind(this);

bindAge(student);


// 5. currying by bind method
let multiply = function(x,y) {
    console.log(x*y);
}
let multiplyByTwo = multiply.bind(this,2);
multiplyByTwo(3);

let multiplyByThree =multiply.bind(this,3);
multiplyByThree(9);


// 6.currying by closures


let multiplyByClosure = function (x){
    return function (y){
        console.log(x*y);
    }
}
let multiplyByTwoClosure =multiplyByClosure(2);
multiplyByTwoClosure(3);

let multiplyByThreeClosure = multiplyByClosure(3);
multiplyByThreeClosure(6);
