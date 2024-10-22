const lamp = document.getElementById("lamp");
const button = document.getElementById("turnOnOff");
button.addEventListener("click", function () {
  if (lamp.src.includes("yellow_lamp.png")) {
    lamp.src = "./img/white_lamp.png";
    button.innerText = "ON";
  } else {
    lamp.src = "./img/yellow_lamp.png";
    button.innerText = "OFF";
  }
});
