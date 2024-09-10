// // The initial numbers that must be verified.
// const n1 = 10;
// const n2 = 15;
// const n3 = 20;
// const n4 = 5;

// // Check one: add up to 50
// // This is a fairly simple operation using
// // arithmetic operators and a comparison.
// const isSum50 = (n1 + n2 + n3 + n4) == 50;

// // Check two: at least two odd numbers
// // Here, we use modulus to check if something is odd.
// // Since % 2 is 0 if even and 1 if odd, we can use
// // arithmetic to count the total number of odd numbers.
// const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
// const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// // Check four: all unique numbers
// // This is long, and there are more efficient
// // ways of handling it with other data structures
// // that we will review later.
// const isUnique = n1 != n2|| n1 != n3|| n1 != n4|| n2 != n3|| n2 != n4|| n3 != n4;

// Here, we put the results into a single variable
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for
// "isUnder25" as an alternative.
// const isValid = isSum50|| isTwoOdd|| !isOver25|| isUnique;

// // Finally, log the results.
// console.log(isValid);

// // Here's another example of how this COULD be done,
// // but it SHOULD NOT be done this way. As programmers,
// // we break things into small, manageable pieces so that
// // they can be better understood, scaled, and maintained.
// const dontDoThis = ((n1 + n2 + n3 + n4) == 50)||
//   ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2)||
//   !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25)||
//   (n1 != n2|| n1 != n3|| n1 != n4|| n2 != n3|| n2 != n4|| n3 != n4);

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Implement the following:
// Check if all numbers are divisible by 5. Cache the result in a variable.

if (n1 % 5 == 0 || n2 % 5 == 0 || n3 % 5 == 0 || n4 % 5 == 0) {
  console.log("All numbers are divisible by 5");
}

// Check if the first number is larger than the last. Cache the result in a variable.
if (n1 > n4) {
  console.log("The first number is larger than the last");
} else {
  console.log("The first number is not larger than the last");
}

// Accomplish the following arithmetic chain:
// Subtract the first number from the second number.
// Multiply the result by the third number.
// Find the remainder of dividing the result by the fourth number.
let remainder = ((n2 - n1) * n3) % n4;
console.log("The remainder is : " + remainder);

// Change the way that isOver25 calculates so that we do not need to use the NOT operator (!) in other logic comparisons.
// Rename the variable as appropriate.
const isUnder25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(isUnder25);

// These are all arbitrary problems, but they demonstrate the simplicity of working with arithmetic and
// comparisons in programming. No matter the complexity of the task in front of you, you will always use
// these core operators to accomplish it.
// Before continuing, go back through your code and add console log statements for each check. Use string concatenation
// or template literals to format the outputs in a reasonable way.
// For example, instead of console.log(isValid), we could write console.log (`The four numbers are valid
//   according to the provided criteria: ${isValid}.`) or something similar.

// Part 2: Practical Math
// Let’s look at a more practical scenario.
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?

let distance = 1500;
let fuelEfficiency = {
  55: 30,
  60: 28,
  75: 23,
};
let fuelBudget = 175;
let fuelCost = 3;
let gallonsNeeded = distance / fuelEfficiency[55];
let gallonsNeeded60 = distance / fuelEfficiency[60];
let gallonsNeeded75 = distance / fuelEfficiency[75];
console.log(
  `You will need ${gallonsNeeded} gallons of fuel for the entire trip at 55 mph.`
);
console.log(
  `You will need ${gallonsNeeded60} gallons of fuel for the entire trip at 60 mph.`
);
console.log(
  `You will need ${gallonsNeeded75} gallons of fuel for the entire trip at 75 mph.`
);

// Will your budget be enough to cover the fuel expense?
let fuelExpense55 = gallonsNeeded * fuelCost;
let fuelExpense60 = gallonsNeeded60 * fuelCost;
let fuelExpense75 = gallonsNeeded75 * fuelCost;
console.log(`The fuel expense at 55 mph will be $${fuelExpense55}.`);
console.log(`The fuel expense at 60 mph will be $${fuelExpense60}.`);
console.log(`The fuel expense at 75 mph will be $${fuelExpense75}.`);
// How long will the trip take, in hours?
let timeTaken = distance / 55;
console.log(`The trip will take ${timeTaken} hours.`);
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.

let timeTaken60 = distance / 60;
let timeTaken75 = distance / 75;
console.log(
  `The trip will take ${timeTaken} hours at 55 mph, ${timeTaken60} hours at 60 mph, and ${timeTaken75} hours at 75 mph.`
);

// Part 3: Future Exploration
// In all of the problems above, there are two tools that would make it much easier to implement the logic we need and
//  to reuse the code to test with different values:

// Control flow, which is how we conditionally determine what a program does next. For example, if we exceed our fuel
// budget, perhaps the program could automatically change the speed it is testing until it finds the optimal speed.

if (fuelExpense55 > fuelBudget) {
  console.log("The fuel expense at all speed exceeds the budget.");
} else if (fuelExpense60 > fuelBudget) {
  console.log(
    "The fuel expense at 60 mph exceeds the budget. The optimal speed is 55 mph."
  );
} else if (fuelExpense75 > fuelBudget) {
  console.log(
    "The fuel expense at 75 mph exceeds the budget. The optimal speed is 60 mph."
  );
} else {
  console.log("The optimal speed is 75 mph.");
}

// Functions, which are reusable blocks of code, allow us to run pieces of code multiple times without rewriting the
// code or changing the value of variables in the code itself, like we needed to do above.
// We will explore control flow in the next lesson, and functions toward the end of the module. Until then,
// continue exploring with the variety of operators and data types available in JavaScript!

function fuelExpense(speed, distance, fuelEfficiency, fuelCost) {
  let gallonsNeeded = distance / fuelEfficiency[speed];
  let fuelExpense = gallonsNeeded * fuelCost;
  return fuelExpense;
}
