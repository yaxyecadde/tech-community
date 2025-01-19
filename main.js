            //assigments//

function out5numwhile() {
    let i = 1;
    while (i <= 5) {
        document.write(i + "<br>");
        i++;
    }
}
function out5numDo() {
    let i = 1;
    do {
        document.write(i + "<br>");
        i++;
    } while (i <= 5);
}
function BreakFor() {
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            break;
        }
        document.write(i + "<br>");
    }
}
function ContinueFor() {
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue;
        }
        document.write(i + "<br>");
    }
}
function nestedloop() {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.write(`(${i}, ${j})<br>`);
        }
    }
}

function multiplication() {
    const size = 10;
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const product = i * j;
            document.write(`${i} * ${j} = ${product}<br>`);
        }
    }
}

function numbe() {
    let nmber = 5; 
    if (nmber > 0) {
        document.write("You Entered A Positive Integer: " + nmber + "<br>");
    }
    document.write("This Statement Is Always Executed.<br>");
}
function numbE() {
    let nmber = -3;
    if (nmber > 0) {
        document.write("You Entered A Positive Integer: " + nmber + "<br>");
    } else {
        document.write("You Entered A Negative Number: " + nmber + "<br>");
    }
    document.write("This Statement Is Always Executed.<br>");
}
function out() {
    let num = 7; 
    if (num % 2 === 0) {
        document.write("It Is An Even Number.<br>");
    } else {
        document.write("It Is An Odd Number.<br>");
    }
}
function printing() {
    for (let i = 1; i <= 5; ++i) {
        document.write(i + "<br>");
    }
}
function disp() {
    for (let i = 1; i <= 5; ++i) {
        document.write("Hello World!<br>");
    }
}
function natural() {
    let Nub = 5; 
    let Sub = 0;
    for (let count = 1; count <= Nub; ++count) {
        Sub += count;
    }
    document.write("Sum = " + Sub + "<br>");
}
function print() {
    let i = 1;
    while (i <= 5) {
        document.write(i + "<br>");
        i++;
    }
}
function pos() {
    let sum = 0;
    let numbers = [10, 20, 30, -1]; 
    for (let num of numbers) {
        if (num >= 0) {
            sum += num;
        }
    }
    document.write("The Sum Is: " + sum + "<br>");
}
function only() {
    let s = 0;
    let u = 0;
    let numbers = [10, 15, -1];
    do {
        u = numbers.shift();
        if (u > 0) {
            s += u;
        }
    } while (u >= 0);
    document.write("The sum is: " + s + "<br>");
}
              //chapter1//

function butom(){
    document.write("hello world");
}


                 // chapter2//
                 

function Arithmetic23() {
    let a = 40;
    let b = 50;
    document.write("Addition: " + (a + b) + "<br>");
    document.write("Subtraction: " + (a - b) + "<br>");
    document.write("Multiplication: " + (a * b) + "<br>");
    document.write("Division: " + (a / b) + "<br>");
}

function comparison23() {
    let num1, num2;
    num1 = 40;
    num2 = 50;
    document.write("Equal: " + (num1 == num2) + "<br>");
    document.write("Greater than: " + (num1 > num2) + "<br>");
    document.write("Less than: " + (num1 < num2) + "<br>");
    document.write("Greater than or equal: " + (num1 >= num2) + "<br>");
    document.write("Less than or equal: " + (num1 <= num2) + "<br>");
    document.write("Not equal: " + (num1 != num2) + "<br>");
}

function assignment23() {
    let num1, num2;
    num1 = 40;
    num2 = 50;

    // Using shorthand assignment operators and outputting the results
    document.write("Initial num1: " + num1 + "<br>");
    document.write("num1 += 3: " + (num1 += 3) + "<br>"); // Adds 3 to num1
    document.write("num1 -= 3: " + (num1 -= 3) + "<br>"); // Subtracts 3 from num1
    document.write("num1 *= 3: " + (num1 *= 3) + "<br>"); // Multiplies num1 by 3
    document.write("num1 /= 3: " + (num1 /= 3) + "<br>"); // Divides num1 by 3
}


function logical23() {
    let num1, num2;
    num1 = 40;
    num2 = 50;

    // Logical AND
    document.write("num1 < 0 && num2 < 0: " + (num1 < 0 && num2 < 0) + "<br>");

    // Logical OR
    document.write("num1 > 0 || num2 > 0: " + (num1 > 0 || num2 > 0) + "<br>");

    // Logical NOT
    document.write("!(num1 == 6): " + !(num1 == 6) + "<br>");
}




               // chapter3 //


// SELECTIONS
function if_Statement() {
    let number = prompt("Enter an integer:");
    if (number >= 0) {
        alert("You entered a positive integer: " + number);
    } else {
        alert("You entered a negative integer: " + number);
    }
}
function if_ElseStatement() {
    let number = prompt("Enter an integer:");
    if (number % 2 === 0) {
        alert(number + " is an even number.");
    } else {
        alert(number + " is an odd number.");
    }
}
function nested_If() {
    let marks = parseInt(prompt("Enter the student's marks (0-100):"));

    if (marks >= 0 && marks <= 100) {
        if (marks >= 90) {
            alert("Grade: A");
        } else if (marks >= 80) {
            alert("Grade: B");
        } else if (marks >= 70) {
            alert("Grade: C");
        } else if (marks >= 60) {
            alert("Grade: D");
        } else {
            alert("Grade: F");
        }
    } else {
        alert("Please enter valid marks between 0 and 100.");
    }
}
function switchPr() {
    let day = parseInt(prompt("Enter a number for the day of the week (1-7):"));
    switch (day) {
        case 1: alert("It's sunday."); break;
        case 2: alert("It's Monday."); break;
        case 3: alert("It's Tuesday."); break;
        case 4: alert("It's Wednesday."); break;
        case 5: alert("It's Thursday."); break;
        case 6: alert("It's Friday."); break;
        case 7: alert("It's Saturday."); break;
        default: alert("Please enter a valid day between 1 and 7.");
    }
}
function ternary() {
    let age = parseInt(prompt("Enter your age:"));
    let message = age > 40
        ? "You are an old man."
        : age > 18
            ? "You are an adult."
            : "You are a junior.";

    alert(message);
}

// LOOPS
function for_Loops() {
    let sum = 0;
    let num = parseInt(prompt("Enter a positive integer:"));
    for (let count = 1; count <= num; ++count) {
        sum += count;
    }
    alert("The sum of integers from 1 to " + num + " is: " + sum);
}
function while_Loops() {
    let i = 1;
    let output = "Counting to 5:";
    while (i <= 5) {
        output += i + " ";
        i++;
    }
    alert(output);
}
function doWhi_leLoops() {
    let i = 1;
    let output = "Counting to 5 (do...while):";
    do {
        output += i + " ";
        i++;
    } while (i <= 5);
    alert(output);
}
function loop_With_Break() {
    let output = "Loop with break:";
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            break;
        }
        output += i + " ";
    }
    alert(output);
}
function loop_With_Continue() {
    let output = "Loop with continue:";
    for (let i = 1; i <= 5; i++) {
        if (i === 3) {
            continue; // Skip the number 3
        }
        output += i + " ";
    }
    alert(output);
}

             // chapter 4//



function prameter() {

    function functionName() {
        document.write("Hello, world!");
    }

    functionName();//this will log “hello,world!”to the console
}


function statements() {
    const add = (a, b) => a + b;
    document.write(add(3, 5));
}

function arrow() {
    const doubleNumber = (number) => {
        return number * 2;
    }
    document.write(doubleNumber(3));
}

function dosomething(callback) {
    document.write("doing something...");
    callback();//execute the callback function
}

function oncomplete() {
    document.write("operation complete");
}

                //chapter 5//
                //chapter 5 output//

function Literal() {
    //Array Literal:
    const names = [" Yaxye, abdullahi"]
    document.getElementById("ch5").innerHTML = names;

}

//
function Constructor() {
    const name = new Array("yaxye, abdullahi, daahir");
    document.getElementById("ch5").innerHTML = name;
}

function Empty_Array() {
    const myArray = [];
    myArray[0] = "first";
    myArray[1] = "second";
    document.getElementById("ch5").innerHTML = myArray;
}


function Arrays_Elemant() {
    const arrayFromStr = Array.from('Hello');
    document.getElementById("ch5").innerHTML = arrayFromStr;
}


function Arrays_from() {
    const sourceArray = ['1,2,3'];
    const newArray = ['...sourceArray'];
    document.getElementById("ch5").innerHTML = newArray, sourceArray;
}


function Array_of() {
    const myArray = Array.of('1,2,3')
    document.getElementById("ch5").innerHTML = myArray;
}

function Accessing() {
    const fruits = ["Apple", "Banana", "Cherry"];
    document.getElementById("ch5").innerHTML = fruits;
}


               //main output//



const fruits = ["apple", "banana", "cherry"];

function Elements() {
    const firstFruits = fruits[0]; 
    document.getElementById("ch5").innerHTML = firstFruits;
    }
           
function Arrays() {
    document.getElementById("ch5").innerHTML = fruits.join(", ");
}
           
function element1() {
    const firstFruit = fruits[0];
    document.getElementById("ch5").innerHTML = firstFruit;
}
           
function Push_Method() {
    fruits.push();
    document.getElementById("ch5").innerHTML = JSON.stringify(fruits);
}
function Unshift_Method() {
    fruits.unshift();
    document.getElementById("ch5").innerHTML = JSON.stringify(fruits);
}
           
function Updating_Elements() {
    fruits[1] = "mango";
    document.getElementById("ch5").innerHTML = JSON.stringify(fruits);
}
           

function Pop_Method() {
    fruits.pop();
    document.getElementById("ch5").innerHTML = JSON.stringify(fruits);
}
           
function Shift_Method() {
    fruits.shift(0, 1);
    document.getElementById("ch5").innerHTML = JSON.stringify(fruits);
}
           
function Splice_Method() {
    fruits.splice(1, 2); 
    document.getElementById("ch5").innerHTML = JSON.stringify(fruits);
}

const fruit = ["apple", "banana", "mango"];
    const numbers = [1, 2, 3];
    const Numbers = [1, 2, 3, 4, 5, 6];
    const numberS = [1, 2, 3, 4];
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];



function showFruits() {
    let output = fruits.join(", ");
    document.getElementById("ch5").innerHTML = "Fruits: " + output;
}


function showSquaredNumbers() {
    const squaredNumbers = numbers.map((num) => num * num);
    document.getElementById("ch5").innerHTML = "Squared Numbers: " + squaredNumbers.join(", ");
}

function showEvenNumbers() {
    const evenNumbers = Numbers.filter(function (num) {
        return num % 2 === 0;
    });
    document.getElementById("ch5").innerHTML = "Even Numbers: " + evenNumbers.join(", ");
}

function showSum() {
    const sum = numberS.reduce(function (total, num) {
        return total + num;
    }, 0);
    document.getElementById("ch5").innerHTML = "Sum of Numbers: " + sum;
}

function showAllEven() {
    const Numbers = [2, 4, 6, 8];
    const allEven = Numbers.every(function (num) {
        return num % 2 === 0;
    });
    document.getElementById("ch5").innerHTML = "All Even: " + allEven;
}

function showMatrixValue() {
    const matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]; 
    const matrixValue = matrix[1][2]; 
    document.getElementById("ch5").innerHTML = "Matrix Value at [1][2]: " + matrixValue;
}



                      //chapter 6//

// // Selecting elements by ID
// let contentElement = document.getElementsByid("content");

// // Modifying content
// contentElement.style.background = "blue";
// contentElement.style.color = "white";

// // Selecting elements by class name
// let boxElements = document.getElementsByClassName("box");

// // Modifying content
// for (let i = 0; i < boxElements.length; i++) {
//     boxElements[i].style.border = "3px dashed black";
// }

// // Selecting elements by tag name
// let paragraphElements = document.getElementsByTagName("p");

// // Modifying content
// for (let i = 0; i < paragraphElements.length; i++) {
//     paragraphElements[i].style.fontStyle = "italic";
//     paragraphElements[i].style.margin = "10px";
// }

// let element = document.getElementById("myLink");
// element.style.textDecoration = "none";

// let paragraph = document.getElementById("paragraph");
// paragraph.innerText = "Setting p tag text using innerText property";
// paragraph.textContent = "Setting p tag text using textContent property";

// let anchor = document.getElementById("my-link");
// anchor.setAttribute("class", "anchor-class");




                      //chapter 7//

             
// const elements = document.getElementById("myButton55");

// element.addEventListener("click", myFunction);

// function myFunction() {
//     alert("Button Clicked!");
// }


// let element = document.getElementById("myElement9");

// //mouseover event
// element.addEventListener("mouseover", function () {
//     element.style.backgroundColor = "green";
// });

// //mouseout event
// element.addEventListener("mouseout", function () {
//     element.style.backgroundColor = "blue";
// });


// const textInputs = document.getElementById("textInputs");
// const outputDivs = document.getElementById("outputs");

// textInput.addEventListener("keydown", function (event) {
//   outputDiv.innerText = `keydown: ${event.key}`;
// });

// textInput.addEventListener("keypress", function (event) {
//     outputDiv.innerText += `\nkeypress: ${event.key}`;
// });

// textInput.addEventListener("keyup", function (event) {
//     outputDiv.innerText += `\nkeyup: ${event.key}`;
// });

// ///////////=======////////

// const textInput = document.getElementById("textInput");
// const outputDiv = document.getElementById("output");

// textInput.addEventListener("focus", function () {
//    updateOutput("Element focused!", "focused")
// });

// textInput.addEventListener("blur", function () {
//     updateOutput("Element blurred!", "blurred")
// });

// function updateOutput(message, ClassName){
//     outputDiv.innerText = message;
//     outputDiv.className = ClassName;
// }

// /////=========///////
// const textInpute = document.getElementById("textInpute");
// const outputDive = document.getElementById("outpute");
// const form = document.getElementById("myform")

// textInpute.addEventListener("input", function(){
//     if(textInpute.value!=""){
//         updateOutput("input changed ","valid");
//     }else{
//         updateOutput("input changed with empty!","invalid")
//     }
// });

// form.addEventListener("submit", function(event){
//     event.preventDefault();
//     updateOutput("form submitted!", "valid");
// });

// function updateOutput(message, ClassName){
//     outputDiv.innerText = message;
//     outputDiv.className = ClassName;
// }

// ////////---------/////

// const parentlist1 = document.getElementById("parentList1");

// parentlist1.addEventListener("click", function(event){
//     if (event.target.tagname === "LI") {
//         alert("clicked on:"+ event.target.innerText);
//     }
// });
 

                   //chapter8//

function validateForm() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    let isValid = true;

   
    emailError.textContent = '';
    passwordError.textContent = '';

    
    if (!email) {
        emailError.textContent = 'Email required';
        isValid = false;
    }

    
    if (!password) {
        passwordError.textContent = 'Password required';
        isValid = false;
    } else if (password.length < 5) {
        passwordError.textContent = 'Password must be at least 5 length';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
    }
}


                //lap project//


function displayName() {
    console.log("Yaxye\nCabdullahi\nDaahir");
    document.getElementById("output").innerText = "Yaxye\nCabdullahi\nDaahir";
}


function displayTimePeriod() {
    const hour = new Date().getHours();
    let period = "";

    switch (true) {
        case (hour >= 5 && hour < 12):
            period = "Morning";
            break;
        case (hour >= 12 && hour < 17):
            period = "Afternoon";
            break;
        case (hour >= 17 && hour < 21):
            period = "Evening";
            break;
        default:
            period = "Night";
    }

    document.getElementById("timeOutput").innerText = `It is now ${period}`;
}


function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const operator = document.getElementById("operator").value;
    let result;

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operator";
    }

    document.getElementById("calcOutput").innerText = `Result: ${result}`;
}