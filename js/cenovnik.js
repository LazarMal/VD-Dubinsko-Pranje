"use strict";

const KLJUC_TEMA_CENOVNIK = "dubinskiSjajTema";
const KLJUC_FONT_CENOVNIK = "dubinskiSjajFont";
const KLJUC_JEZIK_CENOVNIK = "dubinskiSjajJezik";

const PREVOD_CENOVNIKA = {
  sr: {
    pocetna: "Početna",
    onama: "O nama",
    usluge: "Usluge",
    cenovnik: "Cenovnik",
    kontakt: "Kontakt",
    naslov: "Okvirni cenovnik",
    uvod: "Jednostavan pregled osnovnih cena naših usluga.",
    auto_naslov: "Dubinsko pranje automobila",
    auto_tekst: "Sedišta, podne obloge, patosnice i dostupne tekstilne površine.",
    namestaj_naslov: "Dubinsko pranje nameštaja",
    namestaj_tekst: "Sofe, fotelje, stolice, dušeci i druge tapacirane površine.",
    renta_naslov: "Iznajmljivanje mašine",
    renta_24: "Najam na 24 časa: 2.500 RSD",
    renta_vikend: "Vikend paket: 4.500 RSD",
    renta_depozit: "Depozit: 5.000 RSD",
    napomena: "Cene su okvirne i mogu zavisiti od veličine, materijala i stanja površine.",
    nazad: "Nazad na usluge",
    termin: "Zatraži termin",
    pdf: "Otvori PDF cenovnik",
    prava: "© 2026 Dubinski Sjaj. Sva prava zadržana."
  },
  en: {
    pocetna: "Home",
    onama: "About",
    usluge: "Services",
    cenovnik: "Price list",
    kontakt: "Contact",
    naslov: "Price list",
    uvod: "A simple overview of the basic prices of our services.",
    auto_naslov: "Car deep cleaning",
    auto_tekst: "Seats, floor coverings, mats and accessible textile surfaces.",
    namestaj_naslov: "Furniture deep cleaning",
    namestaj_tekst: "Sofas, armchairs, chairs, mattresses and other upholstered surfaces.",
    renta_naslov: "Machine rental",
    renta_24: "24-hour rental: 2,500 RSD",
    renta_vikend: "Weekend package: 4,500 RSD",
    renta_depozit: "Deposit: 5,000 RSD",
    napomena: "Prices are approximate and may depend on size, material and surface condition.",
    nazad: "Back to services",
    termin: "Request an appointment",
    pdf: "Open PDF price list",
    prava: "© 2026 Dubinski Sjaj. All rights reserved."
  }
};

function postaviTemuCenovnika(tema) {
  const tamna = tema === "tamna";
  const telo = document.body;

  telo.classList.toggle("bg-dark", tamna);
  telo.classList.toggle("text-light", tamna);
  telo.classList.toggle("bg-light", !tamna);
  telo.classList.toggle("text-dark", !tamna);

  document.querySelectorAll("[data-tema-kartica]").forEach((kartica) => {
    kartica.classList.toggle("bg-dark", tamna);
    kartica.classList.toggle("text-light", tamna);
    kartica.classList.toggle("border", tamna);
    kartica.classList.toggle("border-secondary", tamna);
    kartica.classList.toggle("bg-white", !tamna);
    kartica.classList.toggle("text-dark", !tamna);
  });

  document.querySelectorAll("[data-tema-prigusen]").forEach((tekst) => {
    tekst.classList.toggle("text-light", tamna);
    tekst.classList.toggle("text-secondary", !tamna);
  });

  document.querySelectorAll("[data-tema-okvir-dugme]").forEach((dugme) => {
    dugme.classList.toggle("btn-outline-light", tamna);
    dugme.classList.toggle("btn-outline-dark", !tamna);
  });

  localStorage.setItem(KLJUC_TEMA_CENOVNIK, tema);
}

function postaviFontCenovnika(velicina) {
  const oblast = document.querySelector("[data-font-oblast]");
  if (!oblast) return;

  oblast.classList.remove("small", "fs-5");
  if (velicina === "mali") oblast.classList.add("small");
  if (velicina === "veliki") oblast.classList.add("fs-5");

  localStorage.setItem(KLJUC_FONT_CENOVNIK, velicina);
}

function smanjiFontCenovnika() {
  const trenutno = localStorage.getItem(KLJUC_FONT_CENOVNIK) || "normalni";
  postaviFontCenovnika(trenutno === "veliki" ? "normalni" : "mali");
}

function povecajFontCenovnika() {
  const trenutno = localStorage.getItem(KLJUC_FONT_CENOVNIK) || "normalni";
  postaviFontCenovnika(trenutno === "mali" ? "normalni" : "veliki");
}

function postaviJezikCenovnika(jezik) {
  const recnik = PREVOD_CENOVNIKA[jezik] || PREVOD_CENOVNIKA.sr;

  document.documentElement.lang = jezik;
  document.querySelectorAll("[data-cenovnik-prevod]").forEach((element) => {
    const kljuc = element.dataset.cenovnikPrevod;
    if (recnik[kljuc] !== undefined) element.textContent = recnik[kljuc];
  });

  const dugmeJezika = document.querySelector("[data-akcija='jezik-cenovnik']");
  if (dugmeJezika) dugmeJezika.textContent = jezik === "sr" ? "EN" : "SR";

  localStorage.setItem(KLJUC_JEZIK_CENOVNIK, jezik);
}

function promeniJezikCenovnika() {
  const trenutni = localStorage.getItem(KLJUC_JEZIK_CENOVNIK) || "sr";
  postaviJezikCenovnika(trenutni === "sr" ? "en" : "sr");
}

document.addEventListener("DOMContentLoaded", () => {
  postaviTemuCenovnika(localStorage.getItem(KLJUC_TEMA_CENOVNIK) || "svetla");
  postaviFontCenovnika(localStorage.getItem(KLJUC_FONT_CENOVNIK) || "normalni");
  postaviJezikCenovnika(localStorage.getItem(KLJUC_JEZIK_CENOVNIK) || "sr");

  document.querySelector("[data-akcija='tema-cenovnik']")?.addEventListener("click", () => {
    const trenutna = localStorage.getItem(KLJUC_TEMA_CENOVNIK) || "svetla";
    postaviTemuCenovnika(trenutna === "tamna" ? "svetla" : "tamna");
  });

  document.querySelector("[data-akcija='font-smanji-cenovnik']")?.addEventListener("click", smanjiFontCenovnika);
  document.querySelector("[data-akcija='font-povecaj-cenovnik']")?.addEventListener("click", povecajFontCenovnika);
  document.querySelector("[data-akcija='jezik-cenovnik']")?.addEventListener("click", promeniJezikCenovnika);
});
