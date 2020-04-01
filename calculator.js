const exampleAdditionInput = {
  num1: 3,
  num2: 8,
  operation: "add",
}
const exampleAdditionInput2 = {
  num1: 11,
  num2: 7,
  operation: "+",
}
const exampleSubtractionInput = {
  num1: 6,
  num2: 5,
  operation: "subtract",
}
const exampleSubtractionInput2 = {
  num1: 2,
  num2: 12,
  operation: "-",
}
const exampleMultiplicationInput = {
  num1: 3,
  num2: 1,
  operation: "multiply",
}
const exampleMultiplicationInput2 = {
  num1: 13,
  num2: 2,
  operation: "*",
}
const exampleDivisionInput = {
  num1: 4,
  num2: 2,
  operation: "divide",
}
const exampleDivisionInput2 = {
  num1: 15,
  num2: 5,
  operation: "/",
}
const exampleZeroDivisionInput = {
  num1: 30,
  num2: 0,
  operation: "divide",
}
const exampleZeroDivisionInput2 = {
  num1: 15,
  num2: 0,
  operation: "/",
}
const exampleNumberCheck = {
  num1: "sushi",
  num2: 13,
  operation: "/",
}

//hard code the operators
const operatorOptions = ["add", "+", "subtract", "-", "multiply", "*", "divide", "/"];

//prompts for user input
console.log("Welcome to my first JavaScript calculator.")
console.log("Please enter your two numbers, and one of the following operators; (+), subtract (-), multiply (*), or divide (/).");

const validOperator = function validOperator(user_input) {
  if(operatorOptions.includes(user_input.operation) === false) {
    console.log("Please enter a valid operator; +), subtract (-), multiply (*), or divide (/).");
  }
}

//https://www.w3schools.com/js/js_switch.asp
const calculate = function(user_input) {
  if (isNaN(user_input.num2) || isNaN(user_input.num1)){
    console.log("Sorry, that is not a valid number.");
  }
   {
    switch (user_input.operation) {
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
        if (user_input.num2 === 0) {
         console.log("Sorry, you cannot divide by 0.");
        }
          else {
          return (user_input.num1 / user_input.num2);
          break;
          }
    }
  }
}

//tests
console.log(calculate(exampleAdditionInput));
console.log(calculate(exampleAdditionInput2));
console.log(calculate(exampleSubtractionInput));
console.log(calculate(exampleSubtractionInput2));
console.log(calculate(exampleMultiplicationInput));
console.log(calculate(exampleMultiplicationInput2));
console.log(calculate(exampleDivisionInput));
console.log(calculate(exampleDivisionInput2));
console.log(calculate(exampleZeroDivisionInput));
console.log(calculate(exampleZeroDivisionInput2));
console.log(calculate(exampleNumberCheck));
