const deg = 6;
const minute = document.querySelector(".minute");
const hour = document.querySelector(".hour");
const second = document.querySelector(".second");

setInterval(() => {
    let date = new Date();
    let mn = date.getMinutes()*deg;
    let hh = date.getHours()*30;
    let ss = date.getSeconds*deg;
    minute.style.transform = `rotateZ(${mn}deg)`;
    hour.style.transform   = `rotateZ(${hh}deg)`;
    second.style.transform = `rotateZ(${ss}deg)`;
});