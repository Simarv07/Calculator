let syntaxError = false;

document.getElementById("equal").onclick = function calculate() {
    var input = document.getElementById("input").innerText

    
    try {
        eval(input); 
    } catch (e) {
        if (e instanceof SyntaxError) {
            document.getElementById("input").innerText = "Syntax Error";
            syntaxError = true;
        }
    }
    
    document.getElementById("input").innerText = eval(input);

}


document.getElementById("clear").onclick = function clear() {
    document.getElementById("input").innerText = "";
    syntaxError = false;
}


    document.getElementById("one").onclick = function inputOne() {
        if (syntaxError == false) {
            var input = document.getElementById("input").innerText;
            document.getElementById("input").innerText = input + "1";
        }
    }

document.getElementById("two").onclick = function inputTwo() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "2";
    }
    }

document.getElementById("three").onclick = function inputThree() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "3";
    }
    }

document.getElementById("four").onclick = function inputFour() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "4";
    }
    }

document.getElementById("five").onclick = function inputFive() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "5";
    }
    }

document.getElementById("six").onclick = function inputSix() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "6";
    }
    }

document.getElementById("seven").onclick = function inputSeven() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "7";
    }
    }

document.getElementById("eight").onclick = function inputEight() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "8";
    }
    }

document.getElementById("nine").onclick = function inputNine() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "9";
    }
    }

document.getElementById("zero").onclick = function inputZero() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "0";
    }
    }

document.getElementById("divide").onclick = function inputDivide() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "/";
    }
    }

document.getElementById("multiply").onclick = function inputMultiply() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "*";
    }
    }

document.getElementById("add").onclick = function inputAdd() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "+";
    }
    }

document.getElementById("subtract").onclick = function inputSubtract() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + "-";
    }
    }

document.getElementById("decimal").onclick = function inputDecimal() {
    if (syntaxError == false) {
        var input = document.getElementById("input").innerText;
        document.getElementById("input").innerText = input + ".";
    }
    }


