"use strict";

const KLJUC_TEMA_KONTAKT = "dubinskiSjajTema";
const KLJUC_FONT_KONTAKT = "dubinskiSjajFont";

function postaviBootstrapTemu(tema) {
  const tamnaTema = tema === "tamna";
  const telo = document.body;
  telo.classList.toggle("bg-dark", tamnaTema);
  telo.classList.toggle("text-light", tamnaTema);
  telo.classList.toggle("bg-light", !tamnaTema);
  telo.classList.toggle("text-dark", !tamnaTema);

  // Zaglavlje ostaje tamno u obe teme, isto kao na ostalim stranicama.

  document.querySelectorAll("[data-tema-povrsina]").forEach((element) => {
    element.classList.toggle("bg-dark", tamnaTema);
    element.classList.toggle("text-light", tamnaTema);
    element.classList.toggle("border-secondary", tamnaTema);
    element.classList.toggle("bg-white", !tamnaTema);
    element.classList.toggle("text-dark", !tamnaTema);
  });

  document.querySelectorAll(".form-control, .form-select").forEach((element) => {
    element.classList.toggle("bg-dark", tamnaTema);
    element.classList.toggle("text-light", tamnaTema);
    element.classList.toggle("border-secondary", tamnaTema);
    element.classList.toggle("bg-white", !tamnaTema);
    element.classList.toggle("text-dark", !tamnaTema);
  });

  localStorage.setItem(KLJUC_TEMA_KONTAKT, tema);
}

function postaviBootstrapFont(velicina) {
  document.body.classList.remove("fs-6", "fs-5");
  if (velicina === "mali") document.body.classList.add("fs-6");
  if (velicina === "veliki") document.body.classList.add("fs-5");
  localStorage.setItem(KLJUC_FONT_KONTAKT, velicina);
}

function smanjiBootstrapFont() {
  const trenutnaVelicina = localStorage.getItem(KLJUC_FONT_KONTAKT) || "normalni";
  postaviBootstrapFont(trenutnaVelicina === "veliki" ? "normalni" : "mali");
}

function povecajBootstrapFont() {
  const trenutnaVelicina = localStorage.getItem(KLJUC_FONT_KONTAKT) || "normalni";
  postaviBootstrapFont(trenutnaVelicina === "mali" ? "normalni" : "veliki");
}

document.addEventListener("DOMContentLoaded", () => {
  postaviBootstrapTemu(localStorage.getItem(KLJUC_TEMA_KONTAKT) || "svetla");
  postaviBootstrapFont(localStorage.getItem(KLJUC_FONT_KONTAKT) || "normalni");

  document.querySelector("[data-akcija='tema']")?.addEventListener("click", () => {
    const trenutnaTema = localStorage.getItem(KLJUC_TEMA_KONTAKT) || "svetla";
    postaviBootstrapTemu(trenutnaTema === "tamna" ? "svetla" : "tamna");
  });

  document.querySelector("[data-akcija='font-smanji']")?.addEventListener("click", smanjiBootstrapFont);
  document.querySelector("[data-akcija='font-povecaj']")?.addEventListener("click", povecajBootstrapFont);
});
