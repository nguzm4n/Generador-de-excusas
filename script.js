var who = ["My Friend ", "My Dog ", "Bat-Man ", "Spider-Man "];
var action = ["Stole ", "Destroyed ", "Sold ", "Sent to the moon "];
var what = ["My Car ", "My Paperwork ", "My Resume ", "My PC"];
var when = [
  "When I Was Sleeping.",
  "While I Was Having Breakfast.",
  "When I Was Buying Food.",
  "While I Was At The Gym.",
];

var arreglo = [who, action, what, when];

var random = "";
function generarExcusa() {
  let excusa = "";
  for (let i = 0; i < 4; i++) {
    random = Math.floor(Math.random() * 4);
    excusa += arreglo[i][random];
  }
  document.getElementById(`excuse`).innerHTML = excusa;
}
