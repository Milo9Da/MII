// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Tengo que confesar que a veces", time: 7 },
  { text: "No me gusta tu forma de ser", time: 9 },
  { text: "Luego te me desapareces", time: 16 },
  { text: "Y no entiendo muy bien por qué", time: 20 },
  { text: "No dices nada romántico", time: 24 },
  { text: "Cuando llega el atardecer", time: 27 },
  { text: "Te pones de un humor extraño", time: 33 },
  { text: "Con cada luna llena al mes", time: 36 },
  { text: "Pero a todo lo demás", time: 42 },
  { text: "Le gana lo bueno que me das", time: 45 },
  { text: "Solo tenerte cerca", time: 50 },
  { text: "Siento que vuelvo a empezar", time: 54 },
  { text: "Yo te quiero con limón y sal", time: 58 },
  { text: "Yo te quiero tal y como estás", time: 59 },
  { text: "No hace falta cambiarte nada", time: 63.5 },
  { text: "Yo te quiero si vienes o si vas", time: 66.6 },
  { text: "Si subes, si bajas, si no estás", time: 68 },
  { text: "Seguro de lo que sientes", time: 72 },
  { text: "Tengo que confesarte ahora", time: 94 },
  { text: "Nunca creí en la felicidad", time: 95 },
  { text: "A veces, algo se le parece", time: 102 },
  { text: "Pero es pura casualidad", time: 104 },
  { text: "Luego me vengo a encontrar", time: 111 },
  { text: "Con tus ojos, me dan algo más", time: 114 },
  { text: "Solo tenerte cerca", time: 119 },
  { text: "Siento que vuelvo a empezar", time: 123 },
  { text: "Yo te quiero con limón y sal", time: 128 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4.8
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 30000);