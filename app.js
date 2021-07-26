// DOM
const num9 = document.getElementById("num9");
const num8 = document.getElementById("num8");
const num7 = document.getElementById("num7");
const num6 = document.getElementById("num6");
const num5 = document.getElementById("num5");
const num4 = document.getElementById("num4");
const num3 = document.getElementById("num3");
const num2 = document.getElementById("num2");
const num1 = document.getElementById("num1");
const num0 = document.getElementById("num0");

const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equll = document.getElementById("equal");

const reset = document.getElementById("reset");

// Functions
const pressButton = (event) => {
    const getButtonId = event.target.id;
    document.getElementById("inputBox").innerHTML += document.getElementById(`${getButtonId}`).value;
    console.log(getButtonId);
}

// Reset
const pressReset = () => {
    document.getElementById("inputBox").innerHTML = "";
    console.log(getButtonId);
}

// num9.addEventListener("click", pressButton);

// EvnetListener
num9.onclick = pressButton;
num8.onclick = pressButton;
num7.onclick = pressButton;
num6.onclick = pressButton;
num5.onclick = pressButton;
num4.onclick = pressButton;
num3.onclick = pressButton;
num2.onclick = pressButton;
num1.onclick = pressButton;
num0.onclick = pressButton;

add.onclick = pressButton;
subtract.onclick = pressButton;
multiply.onclick = pressButton;
divide.onclick = pressButton;
equal.onclick = pressButton;

reset.onclick = pressReset;

// Functions
// Display
// Calculate