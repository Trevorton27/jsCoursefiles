/*********************
 * Variables and data types
 * 
 */
/*
var firstName = 'Trevorton Of Tang';
console.log(firstName);

var lastName = 'Master of Sun';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23
*/

/**********************
 * variable mutation and type coercion
 */
/*
 var firstName ='John';
 var age = 28;

 // type coercion
 console.log(firstName + ' ' + age);

 var job, isMarried;
 job = 'teacher'
 isMarried = false;

 console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

 //variable mutation(changing value of variables previously declared elsewhere)
age = 'twenty eight';
job = 'driver';
alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);

/*******
 * Basic operators
 */
 /*
var year, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

//Math operators
yearJohn = now - 28;
yearMark = now - 33;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

//Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeOf operator example
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');
var x;

console.log(typeof x);
/*****
 * operator precedence
 */
/*
 var now = 2018;
 var yearJohn = 1989;
 var fullAge = 18;

 //multiple operators
 var isFullAge = now - yearJohn >= fullAge;
 console.log(isFullAge);

 //grouping
 var ageJohn = now - yearJohn;
 var ageMark = 35;
 var average = (ageJohn + ageMark) / 2;
 console.log(average);

 //multiple assignments
 var x, y;
 x = y = (3 + 5) * 4 - 6;
 console.log(x, y);

//more operators
 x *= 2;
 console.log(x);

 x += 10;
 console.log(x);
 x--;
 console.log(x);
 */
/*
 var markBMI, johnBmi;
 var markHeight, johnHeight;

 markHeight = 1.8;
 johnHeight = 1.7;

 var markMass, johnMass;
 markMass = 90;
 johnMass = 75;

 markBMI = markMass / (markHeight * markHeight);
 johnBmi = johnMass / (johnHeight * johnHeight);
 console.log(markBMI, johnBmi);

if (markBMI > johnBmi) {
    console.log('Mark\'s BMI is higher than John\'s!');
} else {console.log('John\'s BMI is higher than Mark\'s!');

}




/*
 * If Else statements
 *
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon if he can stop chasing wang for 5 minutes.');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon if he can stop chasing wang for 5 minutes.');
}
*/
/****
 * Boolean Logic
 */
/*
 var firstName = 'John';
 var age = 20;

 if (age < 13) {
     console.log(firstName + ' is a boy.');
 } else if (age < 20 && age >= 13) {
    console.log(firstName + ' is a teenager.');
 }
 else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
 }
 
 else {
    console.log(firstName + ' is a man.');
 }
 */

 /*************
  * The ternary operator and switch statements
  */
/*
  var firstName = 'John';
  var age = 17;

  age >= 18 ? console.log(firstName + ' drinks beer.')
  :  console.log(firstName + ' drinks juice.');

  var drink = age >= 18 ? 'beer' : 'juice';
  console.log(drink);

  if (age >= 18) {
      var drink = 'beer'
  } else {
      var drink = 'juice';
  }
/*
  //switch statement
  var job = 'spastic';
  switch (job) {
      case 'teacher' : 
      case 
      console.log(firstName + ' teaches kids how to code.');
      break;

      case 'driver' :
      console.log(firstName + ' drives a flying banana bus in Lisbon.');
      break;

      case 'designer' :
      console.log(firstName + ' designs flying banana buses.');
      break;

      default:
      console.log(firstName + ' is a deep cover operative and unable to discuss his work.');
  }
*/
/*
age = 10;
  switch (true) {
      case age < 13:
      console.log(firstName + ' is a boy.');
      break;
      case age >= 13 && age < 20:
      console.log(firstName + ' is a teenager.');
      break;
      case age >= 20 && age < 30:
      console.log(firstName + ' is a young man.');
      break;
      default:
      console.log(firstName + ' is a man.');
      break;
  }
  */
/*
  johnLatestThreeGames = 89 + 120 + 103;

  mikeLatestThreeGames = 116 + 94 + 123;

  maryLatestThreeGames = 97 + 134 + 105;

  johnsTeamAverage = johnLatestThreeGames / 3;

  mikesTeamAverage = mikeLatestThreeGames / 3;

  marysTeamAverage = maryLatestThreeGames / 3;

 

  if (johnsTeamAverage >= mikesTeamAverage) {
      console.log('John\'s team has the higher average at ' + johnsTeamAverage + ' points per game. Booya!');
  } else {
    console.log('Mike\'s team has the higher average at ' + mikesTeamAverage + ' points per game. Bang! This is the Catelina Wine Mixer!');
  } if (marysTeamAverage >= johnsTeamAverage && marysTeamAverage >= mikesTeamAverage) {
      console.log('Mary\'s average is higher than both John\'s and Mike\'s at ' + marysTeamAverage + ' They should be embarrassed.');
  } else if (marysTeamAverage <= johnsTeamAverage && marysTeamAverage <= mikesTeamAverage) {
      console.log('The boys win!');
  }
  */

  /***********
   * Functions
   */
/*
   function calculateAge(birthYear) {
       return 2018 - birthYear;
   }

 
   var ageJohn = calculateAge(1990);
   var ageMike = calculateAge(1948);
   var ageJane = calculateAge(1969);

   
   console.log(ageJohn, ageMike, ageJane);

   function yearsUntilRetirement(year, firstName)
   {
       var age = calculateAge(year);
       var retirement = 65 - age;

       if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    
       } else {
           console.log(firstName + ' is already retired.')
       }
       
   }

   yearsUntilRetirement(1990, 'John');
   yearsUntilRetirement(1948, 'Mike');
   yearsUntilRetirement(1969, 'Jane');

   */

   /****
    * Function Statements and Expressions
    */
    // Function declaration
    //function whatDoYouDo(job, firstName) { }


    // Function Expression
    /*
    var whatDoYouDo = function(job, firstName) {
        switch(job) {
            case 'teacher':
                 return firstName + ' teaches kids how to dode, dawg.';

            case 'driver':
                 return firstName + ' drives a cab in Lisbon';

            case 'designer':
                 return firstName + ' designs beautiful websites.';

            default:
                 return firstName + ' is a deep cover operative.';


        }
    }

   console.log(whatDoYouDo('teacher', 'John'));
   console.log(whatDoYouDo('designer', 'Jane'));
   console.log(whatDoYouDo('retired', 'Mark'));
   */

   /**************
    * Arrays
    */
    // initialize new array
    /*
    var names = ['John', 'Mark', 'Jane'];
    var years = new Array(1990, 1969, 1948);

    console.log(names);
    console.log(names.length);

    // mutate array data
    names[1] = 'Banana Sama';
    names[5] = 'Mary';
    names[names.length] = 'Mary';
    console.log(names);
    */

    // different data types
    /*
    var john = ['John', 'Smith', 1990, 'designer', false];

    john.push('blue');
    john.unshift('Mr.');
    console.log(john);

    john.pop();
    john.pop();
    john.shift();
    console.log(john);

    console.log(john.indexOf(1990));

    var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer, playas.' : 'John IS a designer, playas.';
    console.log(isDesigner);
    */
/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2;
    } else if (bill >= 50 && bill < 200) {
        percentage = .15;
    } else {
        percentage = .1;
    }
    return percentage * bill;
} 

var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var finalValues = [bills[0] + tips[0],
                   bills[1] + tips[1],
                   bills[2] + tips[2]];

                   console.log(tips, finalValues);
*/

/*****
 * Objects and properties
 */
/*
// object literal
 var john = {
     firstName: 'John',
     lastName: 'Smith',
     birthYear: 1990,
     family: ['Jane', 'Mark', 'Bob', 'Emily'],
     job: 'teacher',
     isMarried: false
 };

 console.log(john.firstName);
 console.log(john['lastName']);
 var x = 'birthYear';
 console.log(john[x]);

 john.job = 'designer';
 john['isMarried'] = true;
 console.log(john);

 //new Object syntax
 var jane = new Object();
 jane.name = 'Jane';
 jane.birthYear = 1969;
 jane['lastName'] = 'Smith';
 console.log(jane);
  */
 /***
  * Objects and Methods
  */
/*
 var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);
*/

/***
 * Continue and break statements
 */
/*
 var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
 for (var i = 0; i < john.length; i++) {
     if (typeof john[i] !== 'string') continue;
     console.log(john[i]);
 }
/*
 for (var i = 0; i < john.length; i++) {
     if (typeof john[i] !== 'string') break;
     console.log(john[i]);
 }
*/
/*
 //Looping backwards
 var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
 for (var i = john.length - 1; i >= 0; i--) {
     console.log(john[i]);

 }
*/
//declares object and info specific to it
var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            //determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1;
            }
            //add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
 

//declares object and info specific to it
var mark = {
    fullName: 'Mark Miller',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            //determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (bill >= 100 && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
            //add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
}
//calculates average
function calcAverage(tips) {
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
    return sum / tips.length;
}

//do the calculations
//displays tips for both objects
john.calcTips();
mark.calcTips();

console.log(john, mark);

//displays average tip for each object
john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);

console.log(john, mark);

if (john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips with an average of $' + john.average);
} else if (mark.average > john.average) {
    console.log(mark.fullName + '\'s family pays higher tips with an average of $' + mark.average);
}