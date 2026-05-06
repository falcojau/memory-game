import '../sass/main.scss';

const colores = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#F333FF",
  "#FF33A1",
  "#33FFF6",
  "#FFC300",
  "#8E44AD",
  "#2ECC71",
  "#E74C3C",
  "#34495E",
  "#1ABC9C",
  "#D35400",
  "#2980B9",
  "#7F8C8D"
];

const contenedor = document.getElementById("contenedor");
const mensaje = document.getElementById("mensaje");
const elMovimientos = document.getElementById("movimientos");
const elTiempo = document.getElementById("tiempo");
const elMejor = document.getElementById("mejor");
const btnReiniciar = document.getElementById("reiniciar");

let primeraCaja = null;
let segundaCaja = null;
let bloqueado = false;
let parejas = 0;
let movimientos = 0;
let timerInterval = null;
let segundos = 0;
let juegoIniciado = false;

function actualizarMejor() {
  const mejor = sessionStorage.getItem("mejorMovimientos");
  elMejor.textContent = mejor !== null ? `${mejor} mov` : "--";
}

function guardarMejor() {
  const mejor = sessionStorage.getItem("mejorMovimientos");
  if (mejor === null || movimientos < parseInt(mejor)) {
    sessionStorage.setItem("mejorMovimientos", movimientos);
  }
}

function iniciarTimer() {
  if (juegoIniciado) return;
  juegoIniciado = true;
  timerInterval = setInterval(() => {
    segundos++;
    elTiempo.textContent = `${segundos}s`;
  }, 1000);
}

function detenerTimer() {
  clearInterval(timerInterval);
}

function iniciarJuego() {
  contenedor.innerHTML = "";
  mensaje.textContent = "";
  primeraCaja = null;
  segundaCaja = null;
  bloqueado = false;
  parejas = 0;
  movimientos = 0;
  segundos = 0;
  juegoIniciado = false;
  elMovimientos.textContent = "0";
  elTiempo.textContent = "0s";
  detenerTimer();
  actualizarMejor();

  const arrayColores = [...colores, ...colores].sort(() => Math.random() - 0.5);

  arrayColores.forEach(color => {
    const caja = document.createElement("div");
    caja.classList.add("caja");
    caja.dataset.colorEscondido = color;
    contenedor.appendChild(caja);

    caja.addEventListener("click", () => {
      if (bloqueado) return;
      if (caja === primeraCaja) return;

      iniciarTimer();
      caja.style.backgroundColor = color;

      if (!primeraCaja) {
        primeraCaja = caja;
        return;
      }

      segundaCaja = caja;
      bloqueado = true;
      movimientos++;
      elMovimientos.textContent = movimientos;

      if (primeraCaja.dataset.colorEscondido === segundaCaja.dataset.colorEscondido) {
        parejas++;
        primeraCaja = null;
        segundaCaja = null;
        bloqueado = false;

        if (parejas === 15) {
          detenerTimer();
          guardarMejor();
          actualizarMejor();
          mensaje.textContent = `You Won 🎉 — ${movimientos} movimientos en ${segundos}s`;
        }
      } else {
        setTimeout(() => {
          primeraCaja.style.backgroundColor = "";
          segundaCaja.style.backgroundColor = "";
          primeraCaja = null;
          segundaCaja = null;
          bloqueado = false;
        }, 800);
      }
    });
  });
}

btnReiniciar.addEventListener("click", iniciarJuego);

iniciarJuego();
