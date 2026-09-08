"use strict";

const KLJUC_TEMA = "dubinskiSjajTema";
const KLJUC_FONT = "dubinskiSjajFont";

function ucitajKorekcijeTamneTeme() {
  if (document.querySelector("link[href='css/tamna-tema.css']")) return;

  const stilTamneTeme = document.createElement("link");
  stilTamneTeme.rel = "stylesheet";
  stilTamneTeme.href = "css/tamna-tema.css";
  document.head.appendChild(stilTamneTeme);
}

function ucitajKorekcijePristupacnosti() {
  if (document.querySelector("link[href='css/pristupacnost.css']")) return;

  const stilPristupacnosti = document.createElement("link");
  stilPristupacnosti.rel = "stylesheet";
  stilPristupacnosti.href = "css/pristupacnost.css";
  document.head.appendChild(stilPristupacnosti);
}

function postaviTemu(tema) {
  const tamnaTema = tema === "tamna";
  document.body.classList.toggle("tema-tamna", tamnaTema);
  localStorage.setItem(KLJUC_TEMA, tema);

  document.querySelectorAll("[data-akcija='tema']").forEach((dugme) => {
    dugme.setAttribute("aria-pressed", String(tamnaTema));
    dugme.title = tamnaTema ? "Uključi svetlu temu" : "Uključi tamnu temu";
  });
}

function promeniTemu() {
  const trenutnaTema = localStorage.getItem(KLJUC_TEMA) || "svetla";
  postaviTemu(trenutnaTema === "tamna" ? "svetla" : "tamna");
}

function postaviVelicinuFonta(velicina) {
  document.body.classList.remove("font-mali", "font-veliki");

  if (velicina === "mali") document.body.classList.add("font-mali");
  if (velicina === "veliki") document.body.classList.add("font-veliki");

  localStorage.setItem(KLJUC_FONT, velicina);
}

function smanjiFont() {
  const trenutnaVelicina = localStorage.getItem(KLJUC_FONT) || "normalni";
  const novaVelicina = trenutnaVelicina === "veliki" ? "normalni" : "mali";
  postaviVelicinuFonta(novaVelicina);
}

function povecajFont() {
  const trenutnaVelicina = localStorage.getItem(KLJUC_FONT) || "normalni";
  const novaVelicina = trenutnaVelicina === "mali" ? "normalni" : "veliki";
  postaviVelicinuFonta(novaVelicina);
}

function postaviNazivCenovnika() {
  const naziv = document.documentElement.lang === "en" ? "Price list" : "Cenovnik";
  document.querySelectorAll("[data-link-cenovnik]").forEach((link) => {
    link.textContent = naziv;
  });
}

function pripremiCenovnikUMeniju() {
  document.querySelectorAll(".mega-kolona:last-child").forEach((kolona) => {
    if (kolona.querySelector("[data-link-cenovnik]")) return;

    const link = document.createElement("a");
    link.href = "cenovnik.html";
    link.setAttribute("data-link-cenovnik", "");
    kolona.appendChild(link);
  });

  postaviNazivCenovnika();

  const posmatracJezika = new MutationObserver(postaviNazivCenovnika);
  posmatracJezika.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang"]
  });
}

function pripremiNavigaciju() {
  const hamburger = document.querySelector("[data-akcija='meni']");
  const navigacija = document.querySelector(".glavna-navigacija");
  const dugmePodmenija = document.querySelector("[data-akcija='mega-meni']");
  const stavkaPodmenija = dugmePodmenija?.closest(".stavka-padajuca");
  const megaMeni = stavkaPodmenija?.querySelector(".mega-meni");

  function zatvoriMegaMeni() {
    stavkaPodmenija?.classList.remove("otvoren");
    stavkaPodmenija?.classList.add("mega-zatvoren");
    dugmePodmenija?.setAttribute("aria-expanded", "false");
  }

  hamburger?.addEventListener("click", () => {
    const otvorena = navigacija?.classList.toggle("otvorena") || false;
    hamburger.setAttribute("aria-expanded", String(otvorena));
  });

  dugmePodmenija?.addEventListener("click", (dogadjaj) => {
    dogadjaj.preventDefault();

    const trenutnoOtvoren = stavkaPodmenija?.classList.contains("otvoren");
    stavkaPodmenija?.classList.remove("mega-zatvoren");
    stavkaPodmenija?.classList.toggle("otvoren", !trenutnoOtvoren);
    dugmePodmenija.setAttribute("aria-expanded", String(!trenutnoOtvoren));

    if (trenutnoOtvoren) {
      stavkaPodmenija?.classList.add("mega-zatvoren");
    }
  });

  megaMeni?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", zatvoriMegaMeni);
  });

  stavkaPodmenija?.addEventListener("mouseleave", () => {
    stavkaPodmenija.classList.remove("mega-zatvoren");
  });
}

function pripremiKontrolePrikaza() {
  document.querySelectorAll("[data-akcija='tema']").forEach((dugme) => {
    dugme.addEventListener("click", promeniTemu);
  });

  document.querySelectorAll("[data-akcija='font-smanji']").forEach((dugme) => {
    dugme.addEventListener("click", smanjiFont);
  });

  document.querySelectorAll("[data-akcija='font-povecaj']").forEach((dugme) => {
    dugme.addEventListener("click", povecajFont);
  });
}

function ucitajPodesavanja() {
  postaviTemu(localStorage.getItem(KLJUC_TEMA) || "svetla");
  postaviVelicinuFonta(localStorage.getItem(KLJUC_FONT) || "normalni");
}

document.addEventListener("DOMContentLoaded", () => {
  ucitajKorekcijeTamneTeme();
  ucitajKorekcijePristupacnosti();
  ucitajPodesavanja();
  pripremiCenovnikUMeniju();
  pripremiNavigaciju();
  pripremiKontrolePrikaza();
});
