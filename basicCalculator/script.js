var display = document.getElementById("resultDisplay")

function Keys(num) {
    let expre = display;
    expre.value += num;
    console.log(expre.value);
}

function Res() {
    let expression = display.value;
    let ans = eval(expression);
    display.value = ans;
}


function Del() {
    let digit = display;
    digit.value = digit.value.slice(0, -1);
}

function Clear() {
    let erase = display;
    erase.value = ' ';
}