const audio = document.getElementById('audio');
const reproducir = document.getElementById('reproducir');
const pausar = document.getElementById('pausar');
const volumen = document.getElementById('volumen');
const tiempo = document.getElementById('tiempo');
const listaCanciones = document.getElementById('lista-canciones');

reproducir.addEventListener('click', () => {
  audio.play();
});

pausar.addEventListener('click', () => {
  audio.pause();
});

volumen.addEventListener('input', () => {
  audio.volume = volumen.value;
});

audio.addEventListener('timeupdate', () => {
  tiempo.textContent = formatTiempo(audio.currentTime);
});

listaCanciones.addEventListener('click', (e) => {
  const cancion = e.target.closest('li');
  if (cancion) {
    audio.src = cancion.getAttribute('data-src');
    audio.play();
  }
});

function formatTiempo(tiempo) {
  const minutos = Math.floor(tiempo / 60);
  const segundos = Math.floor(tiempo % 60);
  return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
}