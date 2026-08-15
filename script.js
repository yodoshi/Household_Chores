"use strict";

let date = new Date();
const fecha = document.getElementById("date");
const body = document.querySelector("body");
const tittle = document.querySelector(".tittle");

// FECHA DE HOY
fecha.textContent = `${
  date
    .toLocaleDateString("es-ES", {
      weekday: "long",
    })
    .charAt(0)
    .toUpperCase() +
  date
    .toLocaleDateString("es-ES", {
      weekday: "long",
    })
    .slice(1)
}, ${date.getDate()} de ${
  date
    .toLocaleDateString("es-ES", {
      month: "long",
    })
    .charAt(0)
    .toUpperCase() +
  date
    .toLocaleDateString("es-ES", {
      month: "long",
    })
    .slice(1)
} del ${date.getFullYear()} `;

// DETERMINAR RESPONSABLE

const primeraSemana = new Date(date.getFullYear(), 0, 1);
const semana = Math.ceil((date - primeraSemana) / 1000 / 60 / 60 / 24 / 7);
if (semana % 2 === 0) {
  document.querySelector(".dinnerTableResp").textContent = "N";
  document.querySelector(".kitchenResp").textContent = "F";
  document.querySelector(".generalCleaningResp").textContent = "F";
  document.querySelector(".bathroomsResp").textContent = "N";
  document.querySelector(".sheetsResp").textContent = "N";
} else {
  document.querySelector(".dinnerTableResp").textContent = "F";
  document.querySelector(".kitchenResp").textContent = "N";
  document.querySelector(".generalCleaningResp").textContent = "N";
  document.querySelector(".bathroomsResp").textContent = "F";
  document.querySelector(".sheetsResp").textContent = "F";
}
console.log(semana);

function decrease() {
  setCount(count - 1);
}

// COLORES
body.style.backgroundImage = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%23e64e9c' fill-opacity='0.2'%3E%3Cpath fill-rule='evenodd' d='M0 0h40v40H0V0zm40 40h40v40H40V40zm0-40h2l-2 2V0zm0 4l4-4h2l-6 6V4zm0 4l8-8h2L40 10V8zm0 4L52 0h2L40 14v-2zm0 4L56 0h2L40 18v-2zm0 4L60 0h2L40 22v-2zm0 4L64 0h2L40 26v-2zm0 4L68 0h2L40 30v-2zm0 4L72 0h2L40 34v-2zm0 4L76 0h2L40 38v-2zm0 4L80 0v2L42 40h-2zm4 0L80 4v2L46 40h-2zm4 0L80 8v2L50 40h-2zm4 0l28-28v2L54 40h-2zm4 0l24-24v2L58 40h-2zm4 0l20-20v2L62 40h-2zm4 0l16-16v2L66 40h-2zm4 0l12-12v2L70 40h-2zm4 0l8-8v2l-6 6h-2zm4 0l4-4v2l-2 2h-2z'/%3E%3C/g%3E%3C/svg%3E")`;
tittle.style.color = "rgb(87, 9, 58)";
