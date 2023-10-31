// Arreglos con las opciones para generar la excusa
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying",
];
// Función para generar una excusa aleatoria
function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let excuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;

  return excuse;
}
// Función para establecer la excusa en el elemento HTML
function setExcuseInHTML() {
  let excuseText = generateExcuse();
  document.getElementById("excuse").innerHTML = excuseText;
}
// Llama a la función para establecer la excusa cuando la página se carga
window.onload = setExcuseInHTML;
