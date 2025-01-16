// Add an event listener to the button with ID "bumperTolerance" to call the bumperTolerance function when clicked
let callButton = document.getElementById("bumperTolerance").addEventListener("click", bumperTolerance);

// Main function that runs the program
function bumperTolerance() {
    // Array holding the minimum and maximum tolerance for the bumpers in  (inches)
    const bumpers = [
        0.005, // C-1 - C-5 BUMPER MIN TOLERANCE [0]
        0.12,  // C-1 - C-5 BUMPER MAX TOLERANCE [1]

        0.05, // RADIAL BUMPER #1 MIN TOLERANCE [2]
        0.08,  // RADIAL BUMPER #1 MAX TOLERANCE [3]

        0.05, // RADIAL BUMPER #2 MIN TOLERANCE [4]
        0.08,  // RADIAL BUMPER #2 MAX TOLERANCE [5]

        0.05, // DELTA MIN TOLERANCE [6]
        0.12,  // DELTA MAX TOLERANCE [7]

        0.05, // ECHO MIN TOLERANCE [8]
        0.12,  // ECHO MAX TOLERANCE [9]

        0.000, // DOGHOUSE #1 MIN TOLERANCE [10]
        0.143,  // DOGHOUSE #1 MAX TOLERANCE [11]

        0.002, // DOGHOUSE #2 MIN TOLERANCE [12]
        0.206,  // DOGHOUSE #2 MAX TOLERANCE [13]

        0.002, // DOGHOUSE #3 MIN TOLERANCE [14]
        0.120,  // DOGHOUSE #3 MAX TOLERANCE [15]

        0.005, // STRUT MIN TOLERANCE [16]
        0.030,  // STRUT MAX TOLERANCE [17]
    ];

    // Loop through all elements with the class name "isNanData"
    const elements = document.getElementsByClassName("isNanData");
    for (let i = 0; i < elements.length; i++) {
        // Get the value of the element and convert it to a floating-point number
        const value = parseFloat(elements[i].innerHTML);
        // Check if the value is not a number
        if (isNaN(value)) {
            // Update the HTML element with the class name "isNanData" to show an error message            
            elements[i].innerHTML = "Please enter a valid number!";
        }
    }

    // Assuming inputValue is defined somewhere in the code
    const inputValue = [
        // Get the value of the input elements with the class name "inputData" and convert them to floating-point numbers
        // C-1 - C-5
        parseFloat(document.getElementsByClassName("inputData")[0].value), //[0]
        // RADIAL #1
        parseFloat(document.getElementsByClassName("inputData")[1].value), //[1]
        // RADIAL #2
        parseFloat(document.getElementsByClassName("inputData")[2].value), //[2]
        // DELTA
        parseFloat(document.getElementsByClassName("inputData")[3].value), //[3]
        // ECHO
        parseFloat(document.getElementsByClassName("inputData")[4].value), //[4]
        // DOGHOUSE #1
        parseFloat(document.getElementsByClassName("inputData")[5].value), //[5]
        // DOGHOUSE #2
        parseFloat(document.getElementsByClassName("inputData")[6].value), //[6]
        // DOGHOUSE #3
        parseFloat(document.getElementsByClassName("inputData")[7].value), //[7]
        // STRUT
        parseFloat(document.getElementsByClassName("inputData")[8].value), //[8]
     
    ];

    // Check if the input value of C-1 - C-5 is a valid number and within the tolerance range
    if (!isNaN(inputValue[0])) {
        if (inputValue[0] >= bumpers[0] && inputValue[0] <= bumpers[1]) {
            console.log("C-1 - C-5 within tolerance");
            document.getElementById("CharlieOutPut").innerHTML = inputValue[0] + "\" Within tolerance ";
            document.getElementById("CharlieOutPut").style.backgroundColor = "var(--dark-success)";
        } else {
            console.log("C-1 - C-5 out of tolerance");
            let correction;   
            if (inputValue[0] < bumpers[0]) {
                correction = bumpers[0] - inputValue[0];
                document.getElementById("CharlieOutPut").innerHTML = inputValue[0] + "\" is Out of tolerance. Add " + correction  ;
            } else {
                correction = inputValue[0] - bumpers[1];
                document.getElementById("CharlieOutPut").innerHTML = inputValue[0] + "\" is Out of tolerance. Remove " + correction  ;
            }
            document.getElementById("CharlieOutPut").style.backgroundColor = "var(--dark-error)";
        }
    } else {
        console.log("Please enter a valid number");
        document.getElementById("CharlieOutPut").innerHTML = "Please enter a valid number!";
        document.getElementById("CharlieOutPut").style.backgroundColor = "var(--dark-warning)";
    }

   // Check if the input value of Radial Bumper Left is a valid number and within the tolerance range
if (!isNaN(inputValue[1])) {
    if (inputValue[1] >= bumpers[2] && inputValue[1] <= bumpers[3]) {
        console.log("Radial #1 Bumpers within tolerance");
        document.getElementById("radialOneOutPut").innerHTML = inputValue[1] + "\" Within tolerance ";
        document.getElementById("radialOneOutPut").style.backgroundColor = "var(--dark-success)";
    } else {
        console.log("Radial Bumpers out of tolerance");
        let correction;
        if (inputValue[1] < bumpers[2]) {
            correction = bumpers[2] - inputValue[1];
            document.getElementById("radialOneOutPut").innerHTML = inputValue[1] + "\" is Out of tolerance. Add " + correction  ;
        } else {
            correction = inputValue[1] - bumpers[3];
            document.getElementById("radialOneOutPut").innerHTML = inputValue[1] + "\" is Out of tolerance. Remove " + correction  ;
        }
        document.getElementById("radialOneOutPut").style.backgroundColor = "var(--dark-error)";
    }
} else {
    console.log("Please enter a valid number");
    document.getElementById("radialOneOutPut").innerHTML = "Please enter a valid number!";
    document.getElementById("radialOneOutPut").style.backgroundColor = "var(--dark-warning)";
}

// Check if the input value of Radial Bumper Right is a valid number and within the tolerance range
if (!isNaN(inputValue[2])) {
    if (inputValue[2] >= bumpers[4] && inputValue[2] <= bumpers[5]) {
        console.log("Radial #2 Bumpers within tolerance");
        document.getElementById("radialOutPutTwo").innerHTML = inputValue[2] + "\" Within tolerance ";
        document.getElementById("radialOutPutTwo").style.backgroundColor = "var(--dark-success)";
    } else {
        console.log("Radial Bumpers out of tolerance");
        let correction;
        if (inputValue[2] < bumpers[4]) {
            correction = bumpers[4] - inputValue[2];
            document.getElementById("radialOutPutTwo").innerHTML = inputValue[2] + "\" is Out of tolerance. Add " + correction  ;
        } else {
            correction = inputValue[2] - bumpers[5];
            document.getElementById("radialOutPutTwo").innerHTML = inputValue[2] + "\" is Out of tolerance. Remove " + correction  ;
        }
        document.getElementById("radialOutPutTwo").style.backgroundColor = "var(--dark-error)";
    }
} else {
    console.log("Please enter a valid number");
    document.getElementById("radialOutPutTwo").innerHTML = "Please enter a valid number!";
    document.getElementById("radialOutPutTwo").style.backgroundColor = "var(--dark-warning)";
}

// Check if the input value of Delta Bumper is a valid number and within the tolerance range
if (!isNaN(inputValue[3])) {
    if (inputValue[3] >= bumpers[6] && inputValue[3] <= bumpers[7]) {
        console.log("Delta Bumper within tolerance");
        document.getElementById("deltaOut").innerHTML = inputValue[3] + "\" Within tolerance ";
        document.getElementById("deltaOut").style.backgroundColor = "var(--dark-success)";
    } else {
        console.log("Delta Bumper out of tolerance");
        let correction;
        if (inputValue[3] < bumpers[6]) {
            correction = bumpers[6] - inputValue[3];
            document.getElementById("deltaOut").innerHTML = inputValue[3] + "\" is Out of tolerance. Add " + correction  ;
        } else {
            correction = inputValue[3] - bumpers[7];
            document.getElementById("deltaOut").innerHTML = inputValue[3] + "\" is Out of tolerance. Remove " + correction  ;
        }
        document.getElementById("deltaOut").style.backgroundColor = "var(--dark-error)";
    }
} else {
    console.log("Please enter a valid number");
    document.getElementById("deltaOut").innerHTML = "Please enter a valid number!";
    document.getElementById("deltaOut").style.backgroundColor = "var(--dark-warning)";
}

// Check if the input value of Echo Bumper is a valid number and within the tolerance range
if (!isNaN(inputValue[4])) {
    if (inputValue[4] >= bumpers[8] && inputValue[4] <= bumpers[9]) {
        console.log("Echo Bumper within tolerance");
        document.getElementById("echoOut").innerHTML = inputValue[4] + "\" Within tolerance ";
        document.getElementById("echoOut").style.backgroundColor = "var(--dark-success)";
    } else {
        console.log("Echo Bumper out of tolerance");
        let correction;
        if (inputValue[4] < bumpers[8]) {
            correction = bumpers[8] - inputValue[4];
            document.getElementById("echoOut").innerHTML = inputValue[4] + "\" is Out of tolerance. Add " + correction  ;
        } else {
            correction = inputValue[4] - bumpers[9];
            document.getElementById("echoOut").innerHTML = inputValue[4] + "\" is Out of tolerance. Remove " + correction  ;
        }
        document.getElementById("echoOut").style.backgroundColor = "var(--dark-error)";
    }
} else {
    console.log("Please enter a valid number");
    document.getElementById("echoOut").innerHTML = "Please enter a valid number!";
    document.getElementById("echoOut").style.backgroundColor = "var(--dark-warning)";
}

// Check if the input value of Doghouse #1 Bumper is a valid number and within the tolerance range
if (!isNaN(inputValue[5])) {
    if (inputValue[5] >= bumpers[10] && inputValue[5] <= bumpers[11]) {
        console.log("Doghouse #1 Bumper within tolerance");
        document.getElementById("dogHouseOut").innerHTML = inputValue[5] + "\" Within tolerance ";
        document.getElementById("dogHouseOut").style.backgroundColor = "var(--dark-success)";
    } else {
        console.log("Doghouse #1 Bumper out of tolerance");
        let correction;
        if (inputValue[5] < bumpers[10]) {
            correction = bumpers[10] - inputValue[5];
            document.getElementById("dogHouseOut").innerHTML = inputValue[5] + "\" is Out of tolerance. Add " + correction  ;
        } else {
            correction = inputValue[5] - bumpers[11];
            document.getElementById("dogHouseOut").innerHTML = inputValue[5] + "\" is Out of tolerance. Remove " + correction  ;
        }
        document.getElementById("dogHouseOut").style.backgroundColor = "var(--dark-error)";
    }
} else {
    console.log("Please enter a valid number");
    document.getElementById("dogHouseOut").innerHTML = "Please enter a valid number!";
    document.getElementById("dogHouseOut").style.backgroundColor = "var(--dark-warning)";
}

// Check if the input value of Doghouse #2 Bumper is a valid number and within the tolerance range
if (!isNaN(inputValue[6])) {
    if (inputValue[6] >= bumpers[12] && inputValue[6] <= bumpers[13]) {
        console.log("Doghouse #2 Bumper within tolerance");
        document.getElementById("dogHouseTwoOut").innerHTML = inputValue[6] + "\" Within tolerance ";
        document.getElementById("dogHouseTwoOut").style.backgroundColor = "var(--dark-success)";
    } else {
        console.log("Doghouse #2 Bumper out of tolerance");
        let correction;
        if (inputValue[6] < bumpers[12]) {
            correction = bumpers[12] - inputValue[6];
            document.getElementById("dogHouseTwoOut").innerHTML = inputValue[6] + "\" is Out of tolerance. Add " + correction  ;
        } else {
            correction = inputValue[6] - bumpers[13];
            document.getElementById("dogHouseTwoOut").innerHTML = inputValue[6] + "\" is Out of tolerance. Remove " + correction  ;
        }
        document.getElementById("dogHouseTwoOut").style.backgroundColor = "var(--dark-error)";
    }
} else {
    console.log("Please enter a valid number");
    document.getElementById("dogHouseTwoOut").innerHTML = "Please enter a valid number!";
    document.getElementById("dogHouseTwoOut").style.backgroundColor = "var(--dark-warning)";
}

// Check if the input value of Doghouse #3 Bumper is a valid number and within the tolerance range
if (!isNaN(inputValue[7])) {
    if (inputValue[7] >= bumpers[14] && inputValue[7] <= bumpers[15]) {
        console.log("Doghouse #3 Bumper within tolerance");
        document.getElementById("dogHouseThreeOut").innerHTML = inputValue[7] + "\" Within tolerance ";
        document.getElementById("dogHouseThreeOut").style.backgroundColor = "var(--dark-success)";
    } else {
        console.log("Doghouse #3 Bumper out of tolerance");
        let correction;
        if (inputValue[7] < bumpers[14]) {
            correction = bumpers[14] - inputValue[7];
            document.getElementById("dogHouseThreeOut").innerHTML = inputValue[7] + "\" is Out of tolerance. Add " + correction  ;
        } else {
            correction = inputValue[7] - bumpers[15];
            document.getElementById("dogHouseThreeOut").innerHTML = inputValue[7] + "\" is Out of tolerance. Remove " + correction  ;
        }
        document.getElementById("dogHouseThreeOut").style.backgroundColor = "var(--dark-error)";
    }
} else {
    console.log("Please enter a valid number");
    document.getElementById("dogHouseThreeOut").innerHTML = "Please enter a valid number!";
    document.getElementById("dogHouseThreeOut").style.backgroundColor = "var(--dark-warning)";
}

// Check if the input value of Strut Bumper is a valid number and within the tolerance range
if (!isNaN(inputValue[8])) {
    if (inputValue[8] >= bumpers[16] && inputValue[8] <= bumpers[17]) {
        console.log("Strut Bumper within tolerance");
        document.getElementById("strutOut").innerHTML = inputValue[8] + "\" Within tolerance ";
        document.getElementById("strutOut").style.backgroundColor = "var(--dark-success)";
    } else {
        console.log("Strut Bumper out of tolerance");
        let correction;
        if (inputValue[8] < bumpers[16]) {
            correction = bumpers[16] - inputValue[8];
            document.getElementById("strutOut").innerHTML = inputValue[8] + "\" is Out of tolerance. Add " + correction  ;
        } else {
            correction = inputValue[8] - bumpers[17];
            document.getElementById("strutOut").innerHTML = inputValue[8] + "\" is Out of tolerance. Remove " + correction  ;
        }
        document.getElementById("strutOut").style.backgroundColor = "var(--dark-error)";
    }
} else {
    console.log("Please enter a valid number");
    document.getElementById("strutOut").innerHTML = "Please enter a valid number!";
    document.getElementById("strutOut").style.backgroundColor = "var(--dark-warning)";
}
}
