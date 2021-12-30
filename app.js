let display = document.querySelector(".display");

window.onload = () => {
  //on ecoute les touches
  var touches = document.querySelectorAll("button");

  for (var touche of touches) {
    touche.addEventListener("click", verwalten);
  }
};

function verwalten() {
  var touche = this.innerText;

  switch (touche) {
    case "C":
      display.innerText = "";
      break;

    case "=":
      display.innerText = eval(display.innerText);
      break;

    default:
      display.innerText += touche;
      break;
  }
}
