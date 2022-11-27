// let son = +prompt("Sonyozing"),
//   son2 = +prompt("Sonyoz");
// function qush() {
//   console.log(son + son2);
// }
// function ayir() {
//   console.log(son - son2);
// }
// function kop() {
//   console.log(son * son2);
// }
// function bol() {
//   console.log(son / son2);
// }
// function nom(o) {
//   return (o += "").split("").reverse().join("");
// }
// qush(), ayir(), kop(), bol(), console.log(nom(123456));
// function soat() {
//   setInterval(() => {
//     let date = new Date();
//     let clock = document.getElementById("clock");
//     clock.innerHTML =
//       date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
//   }, 1000);
// }
// soat();
function ret() {
  let val = document.querySelector("input").value;
let clock = new Date(val);
    setInterval (()=> {
  let now = new Date();
  let total = clock - now;
  console.log(total);
  let days = Math.floor(total / (1000 * 60 * 60 * 24));
  let hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((total % (1000 * 60)) / 1000);
  document.getElementById("soat").innerHTML =
    days + "d-" + hours + "h-" + minutes + "m-" + seconds + "s";
}, 1000);}
