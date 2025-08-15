const Button1 = document.querySelector("#btn1");
const Button2 = document.querySelector("#btn2");
const Button3 = document.querySelector("#btn3");

function btn1() {
    document.querySelector("#audio1").play();
}

function btn2() {
    document.querySelector("#audio2").play();
}

function btn3() {
    document.querySelector("#audio3").play();
}

// Example: attach to click events
Button1.addEventListener("click", btn1);
Button2.addEventListener("click", btn2);
Button3.addEventListener("click", btn3);
