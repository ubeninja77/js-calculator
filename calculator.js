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

//hard code the operators
const operatorOptions = ["add", "+", "subtract", "-", "multiply", "*", "divide", "/"];

//prompts for user input
console.log("Welcome to my first JavaScript calculator.")

//validate user input 

//https://www.w3schools.com/js/js_switch.asp

//validate operation
if (operatorOptions.includes(user_input.operation) === false) {
  console.log("Please tell me to add (+), subtract (-), multiply (*), or divide (/)!");
} 

const calculate = function(user_input) {
  // confirmNumber(user_input);
  // confirmOperator(user_input);
  
  if (valid(user_input)) {
    switch (input.command) {
      case "add":
      case "+":
        return (user_input.num1 + user_input.num2);
        break;// <-- why you not working???
      case "subtract":
      case "-":
        return (user_input.num1 - user_input.num2);
        break;//
      case "multiply":
      case "*":
        return (user_input.num1 * user_input.num2);
        break;//
      case "divide":
      case "/":
        return (user_input.num1 / user_input.num2);
        break;//
        if(user_input.num2 === 0) {
          console.log("Sorry, you cannot divide by 0.");
        }
          else {
          return (user_input.num1 / user_input.num2);
          }
    }
  }
}

//parseFloat() function parses a string and returns a floating point number. 
//determines if the first character in the specified string is a number. 
//If it is, it parses the string until it reaches the end of the number, 
//and returns the number as a number, not as a string.


//throw NaN

//print 
calculate(exampleMultiplicationInput);

