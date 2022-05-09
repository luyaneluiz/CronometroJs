"use strict";

var horas = 0;
var minutos = 0;
var segundos = 0;

const tempo = 1000;
var cron;

function iniciar() {
  cron = setInterval(() => {
    timer();
  }, tempo);
}

function pausar() {
  clearInterval(cron);
}

function parar() {
  clearInterval(cron);
  horas = 0;
  minutos = 0;
  segundos = 0;

  document.querySelector(".view").innerHTML = "00:00:00";
}

function timer() {
  segundos++;
  if (segundos == 60) {
    segundos = 0;
    minutos++;

    if (minutos == 60) {
      minutos = 0;
      horas++;
    }
  }

  const format =
    (horas < 10 ? "0" + horas : horas) +
    ":" +
    (minutos < 10 ? "0" + minutos : minutos) +
    ":" +
    (segundos < 10 ? "0" + segundos : segundos);
  document.querySelector(".view").innerHTML = format;
}
