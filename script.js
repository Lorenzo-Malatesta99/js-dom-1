const lamp = document.getElementById("lamp");
const button = document.getElementById("turnOnOff");
console.log(lamp)
button.addEventListener("click", function () {
    if (lamp.src.includes("yellow_lamp.png")) {
      lamp.src = "./img/white_lamp.png";
    } else {
      lamp.src = "./img/yellow_lamp.png";
    }
});