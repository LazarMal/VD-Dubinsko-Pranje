"use strict";

function pokreniSlajder() {
  const slajder = document.querySelector("[data-slajder]");
  if (!slajder) return;

  const slajdovi = Array.from(slajder.querySelectorAll(".slajd"));
  const tacke = Array.from(slajder.querySelectorAll(".tacka"));
  const prethodni = slajder.querySelector("[data-prethodni]");
  const sledeci = slajder.querySelector("[data-sledeci]");
  let indeks = 0;
  let tajmer;

  function prikaziSlajd(noviIndeks) {
    indeks = (noviIndeks + slajdovi.length) % slajdovi.length;
    slajdovi.forEach((slajd, i) => slajd.classList.toggle("aktivan", i === indeks));
    tacke.forEach((tacka, i) => {
      tacka.classList.toggle("aktivna", i === indeks);
      tacka.setAttribute("aria-current", i === indeks ? "true" : "false");
    });
  }

  function restartujTajmer() {
    clearInterval(tajmer);
    tajmer = setInterval(() => prikaziSlajd(indeks + 1), 5000);
  }

  prethodni?.addEventListener("click", () => {
    prikaziSlajd(indeks - 1);
    restartujTajmer();
  });

  sledeci?.addEventListener("click", () => {
    prikaziSlajd(indeks + 1);
    restartujTajmer();
  });

  tacke.forEach((tacka, i) => {
    tacka.addEventListener("click", () => {
      prikaziSlajd(i);
      restartujTajmer();
    });
  });

  slajder.addEventListener("mouseenter", () => clearInterval(tajmer));
  slajder.addEventListener("mouseleave", restartujTajmer);

  prikaziSlajd(0);
  restartujTajmer();
}

document.addEventListener("DOMContentLoaded", pokreniSlajder);
