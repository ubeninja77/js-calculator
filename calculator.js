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
  num2: 0,
  operation: "divide",
  operation: "/",
}
const{

}

//hard code the operators
const operatorOptions = ["add", "+", "subtract", "-", "multiply", "*", "divide", "/"];

//prompts for user input
console.log("Welcome to my first JavaScript calculator.")
console.log("Please enter your two numbers, and one of the following operators; (+), subtract (-), multiply (*), or divide (/).");

//https://www.w3schools.com/js/js_switch.asp
//validate operation
const calculate = function(user_input) {
  if (operatorOptions.includes(user_input.operation)) {
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
          throw "Sorry, you cannot divide by 0.";
        }
          else {
          return (user_input.num1 / user_input.num2);
          }
    }
  }
}
//print 
console.log(calculate(exampleDivisionInput));
