//Section 1 -----------

//what types are these? Write your answer in a comment beside it.

1;   // - number
"cat";   // - string
true;   // - value - boolean
[];    // - array - object
{};    // - hash - object
1.1;   // - number
undefined;   // - falsy value - unfefined

//Section 2 -----------

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
// 1; //true
// "cat";  // true
// true; // true
// NaN;  //false
// []; //true
// {}; //true
// undefined;  //false
// ""; // //false
// 0;  // false


//Section 3 -----------

//Using examples that are different from above...

//3.1 Assign a variable that is a number
// a = 1;
// var myNum = 1;

//3.2 Assign a variable that is a string
// b = "hello";
//var string = "hello";

//3.3 Assign a variable that is a boolean
// c = boolean()
//var myVar = true;

//3.4 Assign a variable that is an object
// var d = object() {

}

//var myObject = { name: 'Rick' }


//Section 4 -----------
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

var answer = "true";        // Delete "true" here to make function false.

if (answer  === "true"){
console.log("hello");
}
else {
  console.log("bye");
}


//Section 5 -----------
var animals = ["raccoon","hedgehog","mouse","gerbil"];    // With JS dont forget "var"

//5.1. Assign the first element to a variable
var first = animals[0];

//5.2. Assign the last element to a variable
var last = animals[3];

//5.3. Assign the length of an array to a variable
var length = animals.length;

//5.4. Add an item to the end of the array
var animals.push("badger");

//5.5. Add an item to the start of the array
var animals.unshift("hamster");

//5.6. Assign the index of hedgehog to a variable
var spikey = animals[2];    // var animals = ["hamster", "raccoon","hedgehog", ... X This selects the hedgehog not the index number.
// var t animals.indexOf( "hedgehog" )
// => 1

//Section 6 -----------

//6.1 Create an array of 5 vegetables
var vegetables = [ "onion", "corn", "peas", "cale", "peppers" ]

//6.2 Loop over the array and write to the console using a "while"
// X
function looper( array) {
  var i = 0;
  while (i < array.length); {
    console.log(array[i]);
    i++;
  }
}

//6.3 Loop again using a "for" with a counter
// Completly lost on this. X

for (var i = 0; i < veg.length; i++) {
  console.log(veg[i]);
}

// " var i = 0 " - Setting the start point of 0
// " i < veg.length "


// i++ is the same ad i +=1, its goes up by 1. Its just shorthand.

//6.4 Loop again using a "for in"





//Section 7             // Didnt manage this question.
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
]
//7.1 Calculate the total cash in accounts
var totalAmount = function(array) {
  var x, total = 0;
  for (x = 0; x < array.length; x++) {
    total += array[x]['amount']
  }
  return total;
}
console.log( totalAmount(amounts))

//7.2 Find the name of the account with the largest balance
var memo = 0;
var name;

for (account of amounts) {
  if (account.amount > memo) {
    name = account.name;
    memo = account.amount;
  }
}
console.log(name);


//7.3 Find the name of the account with the smallest balance
var memo = accounts[0];


for (account of amounts) {
  if (account.amount < memo.account) {
    memo = account;
  }
}
console.log(memo.name);

//7.4 Calculate the average bank account value
var totalAmount = function(array) {
  var x, total = 0;
  for (x = 0; x < array.length; x++) {
    total += array[x]['amount']
  }
  return total;
}
console.log( totalAmount(accounts) / accounts.length)

//7.5 Find the value of marcs bank account


//7.6 Find the holder of the largest bank account
//7.7 Calculate the total cash in business accounts
//7.8 Find the largest personal account owner
// SAME AS QUESTION 7.2.

//Section 8
//Assign a variable myPerson to a hash, giving them a name, height favourate food