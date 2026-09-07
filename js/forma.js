"use strict";

function tekstForme(srpski, engleski) {
  return document.documentElement.lang === "en" ? engleski : srpski;
}

function postaviGresku(polje, poruka) {
  polje.classList.add("is-invalid");
  const blok = polje.closest(".mb-3") || polje.parentElement;
  const porukaElement = blok?.querySelector(".invalid-feedback");
  if (porukaElement && poruka) porukaElement.textContent = poruka;
}

function ukloniGresku(polje) {
  polje.classList.remove("is-invalid");
  polje.classList.add("is-valid");
}

function validirajKontaktFormu(dogadjaj) {
  dogadjaj.preventDefault();
  const forma = dogadjaj.currentTarget;
  const ime = forma.querySelector("#ime");
  const telefon = forma.querySelector("#telefon");
  const elektronskaPosta = forma.querySelector("#elektronska-posta");
  const usluga = forma.querySelector("#usluga");
  const poruka = forma.querySelector("#poruka");
  const saglasnost = forma.querySelector("#saglasnost");
  const status = forma.querySelector("#status-forme");

  forma.querySelectorAll(".is-invalid, .is-valid").forEach((polje) => polje.classList.remove("is-invalid", "is-valid"));
  status.textContent = "";

  let ispravna = true;
  const obrazacIme = /^[A-Za-zČĆŽŠĐčćžšđ\s-]{2,40}$/;
  const obrazacTelefon = /^[0-9+()\s-]{6,20}$/;
  const obrazacElektronskaPosta = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!obrazacIme.test(ime.value.trim())) {
    postaviGresku(ime, tekstForme("Unesite ime od najmanje dva slova.", "Enter a name with at least two letters."));
    ispravna = false;
  } else ukloniGresku(ime);

  if (!obrazacTelefon.test(telefon.value.trim())) {
    postaviGresku(telefon, tekstForme("Unesite ispravan broj telefona.", "Enter a valid phone number."));
    ispravna = false;
  } else ukloniGresku(telefon);

  if (!obrazacElektronskaPosta.test(elektronskaPosta.value.trim())) {
    postaviGresku(elektronskaPosta, tekstForme("Unesite ispravnu email adresu.", "Enter a valid email address."));
    ispravna = false;
  } else ukloniGresku(elektronskaPosta);

  if (!usluga.value) {
    postaviGresku(usluga, tekstForme("Izaberite jednu uslugu.", "Choose one service."));
    ispravna = false;
  } else ukloniGresku(usluga);

  if (poruka.value.trim().length < 10) {
    postaviGresku(poruka, tekstForme("Poruka treba da ima najmanje 10 karaktera.", "The message must contain at least 10 characters."));
    ispravna = false;
  } else ukloniGresku(poruka);

  if (!saglasnost.checked) {
    saglasnost.classList.add("is-invalid");
    const porukaSaglasnosti = saglasnost.parentElement.querySelector(".invalid-feedback");
    if (porukaSaglasnosti) {
      porukaSaglasnosti.textContent = tekstForme("Potvrdite saglasnost.", "Confirm your consent.");
    }
    ispravna = false;
  } else ukloniGresku(saglasnost);

  forma.classList.add("was-validated");

  if (ispravna) {
    status.className = "alert alert-success mt-3";
    status.textContent = tekstForme(
      "Poruka je uspešno proverena i spremna za slanje. Ovo je demonstraciona forma i podaci se ne šalju na server.",
      "The message has been validated and is ready to send. This is a demonstration form and the data is not sent to a server."
    );
    forma.reset();
    forma.classList.remove("was-validated");
    forma.querySelectorAll(".is-valid").forEach((polje) => polje.classList.remove("is-valid"));
  } else {
    status.className = "alert alert-danger mt-3";
    status.textContent = tekstForme("Proverite označena polja i pokušajte ponovo.", "Check the marked fields and try again.");
  }
}

function pripremiKontaktFormu() {
  const forma = document.querySelector("#kontakt-forma");
  forma?.addEventListener("submit", validirajKontaktFormu);
}

document.addEventListener("DOMContentLoaded", pripremiKontaktFormu);
