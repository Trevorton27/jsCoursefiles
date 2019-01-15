
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);

*/
/*
var Mark = {
    fullName: 'MarkTanPan',
    mass: '88',
    height: 1.8,
    
    calcMarkBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};

var John = {
    fullName: 'JohnTanPan',
    mass: '80',
    height: 1.8,
    
    calcJohnBMI: function() {
        this.BMI = this.mass / (this.height * this.height);
    }
};
 console.log(Mark, John);
John.calcJohnBMI();
Mark.calcMarkBMI();

if (Mark.BMI > John.BMI) {
    console.log( Mark.fullName + '\'s BMI be like the highest, playa! That shit\'s at ' + Mark.BMI);
} else {
    console.log(John.fullName + '\'s BMI be slammin, dawg! It\'s all up at ' + John.BMI);
}

*/
/*****
 * Loops and iteration
 */
/*
calculateAge(1965);


//function declaration
function calculateAge(year) {
    console.log(2016 - year); 
}

//retirement(1956);

//function expression
var retirement = function(year) {
    console.log(65 - (2016 - year));
}

//variables
var age = 23;
console.log(age);

function foo() {
    var age = 65;
    console.log(age);

}
console.log(age);
*/

var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }   
}

function third() {
    var d = 'John';
   // console.log(c);
   console.log(a + d);
}

