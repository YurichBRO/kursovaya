const d1 = document.getElementById("digit1");
const d2 = document.getElementById("digit2");
const d3 = document.getElementById("digit3");
const d4 = document.getElementById("digit4");
const d5 = document.getElementById("digit5");
const d6 = document.getElementById("digit6");
const d7 = document.getElementById("digit7");
const d8 = document.getElementById("digit8");
const endTime = new Date(2024, 4, 25, 17, 30, 0);

const t = setInterval(() => {
    const timeLeft = endTime - Date.now();
    const seconds = Math.floor(timeLeft / 1000) % 60;
    const minutes = Math.floor(timeLeft / 1000 / 60) % 60;
    const hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24;
    const days = Math.floor(timeLeft / 1000 / 60 / 60 / 24) % 100;
    d1.innerText = Math.floor(days / 10);
    d2.innerText = days % 10;
    d3.innerText = Math.floor(hours / 10);
    d4.innerText = hours % 10;
    d5.innerText = Math.floor(minutes / 10);
    d6.innerText = minutes % 10;
    d7.innerText = Math.floor(seconds / 10);
    d8.innerText = seconds % 10;
}, 1000);