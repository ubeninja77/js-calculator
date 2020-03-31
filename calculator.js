
//hard code the operators
const exampleAdditionInput = {
  num1: 3,
  num2: 8,
  operation: "add",
  operation: "+",
}
const exampleSubtractionInput = {
  num1: 9,
  num2: 5,
  operation: "subtract",
  operation: "-",
}
const exampleMultiplicationInput = {
  num1: 3,
  num2: 1,
  operation: "multiply",
  operation: "*",
}
const exampleDivisionInput = {
  num1: 3,
  num2: 4,
  operation: "divide",
  operation: "/",
}
//prompts for user input
console.log("Welcome to my first JavaScript calculator.")

//validate user input 

//switch statement to evaluates the block and looks for a match
//if no match is found, the associcated block is executed


//parseFloat() function parses a string and returns a floating point number. 
//determines if the first character in the specified string is a number. 
//If it is, it parses the string until it reaches the end of the number, 
//and returns the number as a number, not as a string.

const calculate = function(user_input) {

if (user_input["command"] != ("add", "+", "subtract", "-", "multiply", "*", "divide", "/"))
    console.log("Please tell me to add (+), subtract (-), multiply (*), or divide (/)!");
}

// end
// if ((command == "+" ||command == "add"
//    print (first_num.to_i + second_num.to_i)
// elsif command == "-" || command == "subtract"  
//     print (first_num.to_i - second_num.to_i)
// elsif command == "*" || command == "multiply"
//     print (first_num.to_i * second_num.to_i)
// else
//   if second_num.to_i == 0
//     print "Sorry, you cannot divide by zero."
//     else
//     print (first_num.to_i / second_num.to_i)
// end
// }

//throw NaN

//validate operators
const validateCommand = function(input) {
  input.command = input.command.toLowerCase();
}

//print 
calculate(exampleMultiplicationInput);

