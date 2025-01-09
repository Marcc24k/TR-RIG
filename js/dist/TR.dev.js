"use strict";

// Add an event listener to the button with ID "bumperTolerance" to call the bumperTolerance function when clicked
var callButton = document.getElementById("bumperTolerance").addEventListener("click", bumperTolerance); // Main function that runs the program

function bumperTolerance() {
  // Get the value from the input field with ID "charlieBumpers" and convert it to a floating-point number
  // let inputValue = parseFloat(document.getElementsByClassName("inputData")[0].value);
  // let inputValue = parseFloat(document.getElementById("radialBumpers").value);
  // let inputValue = parseFloat(document.getElementsByClassName("inputData").value);
  var inputValue = [// parseFloat(document.getElementsByClassName("inputData")[0].value),
  parseFloat(document.getElementsByClassName("inputData")[2].value)]; // Array holding the minimum and maximum tolerance for the bumpers

  var bumpers = [0.005, // C-1 - C-5 BUMPER MIN TOLERANCE [0]
  0.12, // C-1 - C-5 BUMPER MAX TOLERANCE [1]
  //
  0.15, // RADIAL BUMPER MIN TOLERANCE [2]
  0.2 // RADIAL BUMPER MAX TOLERANCE [3]
  ]; // Check if the input value is not a number

  if (isNaN(inputValue)) {
    console.log("Please enter a valid number"); // Update the HTML element with ID "CharlieOutPut" to show an error message

    document.getElementById("CharlieOutPut").innerHTML = " Please enter a valid number!";
    document.getElementById("CharlieOutPut").style.backgroundColor = "darkorange";
    return; // Exit the function if the input is not a number
  } // // Check if the input value of C-1 - C-5 are within the tolerance range
  // if (inputValue[0] >= bumpers[0] && inputValue[0] <= bumpers[1]) {
  //     console.log("C-1 - C-5 within tolerance");
  //     document.getElementById("CharlieOutPut").innerHTML = inputValue[0] + "\" Within tolerance ";
  //     document.getElementById("CharlieOutPut").style.backgroundColor = "darkgreen";
  // } else {
  //     console.log("C-1 - C-5 out of tolerance");
  //     // Update the HTML element with ID "CharlieOutPut" to show the input value is out of tolerance
  //     document.getElementById("CharlieOutPut").innerHTML = inputValue + "\" is Out of tolerance ";
  //     document.getElementById("CharlieOutPut").style.backgroundColor = "darkred";
  // }
  // // Check if the input value of C-1 - C-5 are within the tolerance range


  if (inputValue[2] >= bumpers[2] && inputValue[2] <= bumpers[3]) {
    console.log("Radial Bumpers within tolerance");
    document.getElementById("radialOutPut").innerHTML = inputValue[2] + "\" Within tolerance ";
    document.getElementById("radialOutPut").style.backgroundColor = "darkgreen";
  } else {
    console.log("C-1 - C-5 out of tolerance"); // Update the HTML element with ID "CharlieOutPut" to show the input value is out of tolerance

    document.getElementById("radialOutPut").innerHTML = inputValue + "\" is Out of tolerance ";
    document.getElementById("radialOutPut").style.backgroundColor = "darkred";
  } // Log the input value to the console


  console.log(inputValue);
}