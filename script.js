// Ouve o pressionamento de teclas no corpo da página
// e toca o som correspondente à tecla pressionada
document.body.addEventListener("keyup", (event) => {
  playSound(event.code.toLowerCase());
});

// Quando o botão "Tocar" é clicado, lê a sequência digitada
// e inicia a reprodução da composição
document.querySelector(".composer button").addEventListener("click", () => {
  let song = document.querySelector("#input").value;

  if (song !== "") {
    let songArray = song.split("");
    playComposition(songArray);
  }
});

// Toca o áudio referente à tecla e aplica o efeito visual
function playSound(sound) {
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`);

  // Se existir o áudio, reinicia e executa
  if (audioElement) {
    audioElement.currentTime = 0;
    audioElement.play();
  }

  // Destaca o botão na tela durante a execução do som
  if (keyElement) {
    keyElement.classList.add("active");

    setTimeout(() => {
      keyElement.classList.remove("active");
    }, 300);
  }
}

// Reproduz uma sequência de sons em intervalos regulares
function playComposition(songArray) {
  let wait = 0;

  for (let songItem of songArray) {
    setTimeout(() => {
      playSound(`key${songItem}`);
    }, wait);

    wait += 250; // intervalo entre cada som
  }
}
