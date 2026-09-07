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

  document.querySelectorAll("[data-tema-pozadina]").forEach((element) => {
    element.classList.toggle("bg-dark", tamnaTema);
    element.classList.toggle("text-light", tamnaTema);
    element.classList.toggle("bg-light", !tamnaTema);
    element.classList.toggle("text-dark", !tamnaTema);
  });

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

  document.querySelectorAll("[data-akcija='tema']").forEach((dugme) => {
    dugme.setAttribute("aria-pressed", String(tamnaTema));
    dugme.title = tamnaTema ? "Uključi svetlu temu" : "Uključi tamnu temu";
  });

  localStorage.setItem(KLJUC_TEMA_KONTAKT, tema);
}

function postaviBootstrapFont(velicina) {
  document.body.classList.remove("small", "fs-5");

  if (velicina === "mali") document.body.classList.add("small");
  if (velicina === "veliki") document.body.classList.add("fs-5");

  localStorage.setItem(KLJUC_FONT_KONTAKT, velicina);
}

function smanjiBootstrapFont() {
  const trenutnaVelicina = localStorage.getItem(KLJUC_FONT_KONTAKT) || "normalni";
  const novaVelicina = trenutnaVelicina === "veliki" ? "normalni" : "mali";
  postaviBootstrapFont(novaVelicina);
}

function povecajBootstrapFont() {
  const trenutnaVelicina = localStorage.getItem(KLJUC_FONT_KONTAKT) || "normalni";
  const novaVelicina = trenutnaVelicina === "mali" ? "normalni" : "veliki";
  postaviBootstrapFont(novaVelicina);
}

document.addEventListener("DOMContentLoaded", () => {
  postaviBootstrapTemu(localStorage.getItem(KLJUC_TEMA_KONTAKT) || "svetla");
  postaviBootstrapFont(localStorage.getItem(KLJUC_FONT_KONTAKT) || "normalni");

  document.querySelectorAll("[data-akcija='tema']").forEach((dugme) => {
    dugme.addEventListener("click", () => {
      const trenutnaTema = localStorage.getItem(KLJUC_TEMA_KONTAKT) || "svetla";
      postaviBootstrapTemu(trenutnaTema === "tamna" ? "svetla" : "tamna");
    });
  });

  document.querySelectorAll("[data-akcija='font-smanji']").forEach((dugme) => {
    dugme.addEventListener("click", smanjiBootstrapFont);
  });

  document.querySelectorAll("[data-akcija='font-povecaj']").forEach((dugme) => {
    dugme.addEventListener("click", povecajBootstrapFont);
  });
});
