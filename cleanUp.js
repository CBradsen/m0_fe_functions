// Each example below has at least one opportunity for improvement.

// YOUR TASK:
  // Modify the code to make that improvement(s)
  // write a JS comment to explain what you changed, and why
  // make sure the code you submit WORKS - you can run this entire file 
    // using `node cleanUp.js` or copy and paste into a replit


// EX 1: a ";" ? at the end of the console.log ()
function nameQuestion() {
  console.log("Hello, what is your name?");
}

nameQuestion()


// EX 2:Tab in line 20 and 21.  
// Move bottom curly bracket 
//to the begining of line to be in line with "function."

function addThreeNums(first, second, third) {
  var sum = first + second + third
  console.log(sum);
}

addThreeNums(1, 2, 3);
addThreeNums(4, 2, 7);


// EX 3: Line 32: spell out function, 
//put space between paragraph() and curly brackets{}
// line 39/40: move end curly bracket to beginning of line 40
function makeFreshPesto() {
  console.log("Buy ingredients: basil, parmesan, romano, olive oil, pine nuts, garlic, salt, pepper");
  console.log("Pulse basil and pine nuts");
  console.log("Add garlic and cheeses");
  console.log("Slowly pour in oil");
  console.log("Season");    
}

makeFreshPesto();


//  EX 4: Line 47: move curly bracket to end of line 46
// Line 48, 49 fix indents to be same and indented under function.
// Line 52: moved period . inside of back tick & added a semicolon ; at end
// Line 53: moved curly bracket } to beginning of line
// Line 56: added average() to call the function
function average(num1, num2) {
  var sum = num1 + num2;
  var avg = sum % 2;

  console.log(`the average is: ${avg}.`);
}
average(8,9)