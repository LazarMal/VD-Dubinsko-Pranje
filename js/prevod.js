"use strict";

const KLJUC_JEZIK = "dubinskiSjajJezik";
const REZERVNI_PREVODI = {
  "sr": {
    "meni_pocetna": "Početna",
    "meni_o_nama": "O nama",
    "meni_usluge": "Usluge",
    "meni_kontakt": "Kontakt",
    "meni_auto": "Dubinsko pranje automobila",
    "meni_namestaj": "Dubinsko pranje nameštaja",
    "meni_renta": "Iznajmljivanje mašina",
    "tema": "Tema",
    "font": "A+",
    "pocetna_oznaka": "Čistoća koja se vidi i oseća",
    "pocetna_naslov": "Dubinsko pranje bez komplikovanja.",
    "pocetna_uvod": "Profesionalno dubinsko pranje automobila i nameštaja, uz mogućnost iznajmljivanja mašina kada želite da posao uradite sami.",
    "pocetna_dugme_usluge": "Pogledaj usluge",
    "pocetna_dugme_kontakt": "Zatraži termin",
    "pocetna_usluge_naslov": "Tri načina da dođete do čistog prostora",
    "pocetna_usluge_tekst": "Od kompletnog enterijera automobila do garniture u dnevnoj sobi ili mašine za samostalno pranje.",
    "kartica_auto_naslov": "Automobili",
    "kartica_auto_tekst": "Dubinsko pranje sedišta, poda, gepeka i ostalih tekstilnih površina u enterijeru vozila.",
    "kartica_namestaj_naslov": "Nameštaj",
    "kartica_namestaj_tekst": "Temeljno pranje sofa, fotelja, stolica, dušeka i drugih tapaciranih površina.",
    "kartica_renta_naslov": "Iznajmljivanje",
    "kartica_renta_tekst": "Preuzmite mašinu za dubinsko pranje na 24 časa ili za vikend, uz kratko uputstvo za korišćenje.",
    "saznaj_vise": "Saznaj više →",
    "pocetna_brojka_1": "vrste usluge",
    "pocetna_brojka_2": "najam mašine",
    "pocetna_brojka_3": "dana nedeljno",
    "pocetna_koraci_naslov": "Kako izgleda saradnja",
    "korak_1_naslov": "Pošaljete upit",
    "korak_1_tekst": "Navedite šta želite da se očisti i približnu veličinu ili tip površine.",
    "korak_2_naslov": "Dogovorimo termin",
    "korak_2_tekst": "Potvrđujemo termin, okvirnu cenu i način dolaska ili preuzimanja mašine.",
    "korak_3_naslov": "Pranje ili preuzimanje",
    "korak_3_tekst": "Obavljamo uslugu ili vam predajemo mašinu sa jasnim uputstvom za upotrebu.",
    "poziv_naslov": "Treba vam procena cene?",
    "poziv_tekst": "Pošaljite kratak opis i odgovorićemo sa predlogom usluge.",
    "poziv_dugme": "Kontaktirajte nas",
    "onama_oznaka": "O nama",
    "onama_naslov": "Jedna firma, tri praktične usluge.",
    "onama_uvod": "Dubinski Sjaj je zamišljen kao lokalna firma koja klijentima nudi profesionalno pranje vozila i nameštaja, ali i jednostavnu opciju iznajmljivanja opreme.",
    "onama_pristup_naslov": "Jednostavan pristup poslu",
    "onama_pristup_tekst": "Fokus je na jasnom dogovoru, pravilnoj pripremi površine i radu sa opremom namenjenom ekstrakcionom čišćenju. Bez komplikovanih paketa i nejasnih uslova.",
    "onama_stavka_1": "Pre dogovora proveravamo vrstu i stanje površine.",
    "onama_stavka_2": "Klijent unapred dobija okvirnu cenu i vreme trajanja.",
    "onama_stavka_3": "Kod iznajmljivanja dobija kratko uputstvo za bezbedan rad.",
    "onama_cesta-pitanja_naslov": "Najčešća pitanja",
    "cesta-pitanja_1_pitanje": "Koliko traje dubinsko pranje automobila?",
    "cesta-pitanja_1_odgovor": "Vreme zavisi od veličine vozila i stanja enterijera. Za standardni putnički automobil okvirno se planira nekoliko sati rada i dodatno vreme sušenja.",
    "cesta-pitanja_2_pitanje": "Da li nameštaj može odmah da se koristi?",
    "cesta-pitanja_2_odgovor": "Ne. Posle ekstrakcionog pranja površini je potrebno vreme da se potpuno osuši. Tačno vreme zavisi od materijala, ventilacije i temperature prostora.",
    "cesta-pitanja_3_pitanje": "Šta dobijam uz iznajmljenu mašinu?",
    "cesta-pitanja_3_odgovor": "Dobijate mašinu, osnovno uputstvo za rad i objašnjenje pravilnog postupka pranja i vraćanja opreme.",
    "onama_video_naslov": "Kako izgleda ekstrakciono pranje",
    "onama_video_tekst": "Primer postupka je prikazan u ugrađenom YouTube video zapisu, kao dodatni multimedijalni sadržaj.",
    "usluge_oznaka": "Usluge i iznajmljivanje",
    "usluge_naslov": "Odaberite ono što vam treba.",
    "usluge_uvod": "Usluge su podeljene u tri jasne grupe kako bi izbor i dogovor bili jednostavni.",
    "usluge_auto_naslov": "Dubinsko pranje automobila",
    "usluge_auto_tekst": "Pranje tekstilnih površina enterijera uz usisavanje, tretiranje i ekstrakciono izvlačenje nečistoće.",
    "usluge_namestaj_naslov": "Dubinsko pranje nameštaja",
    "usluge_namestaj_tekst": "Pranje sofa, dvoseda, fotelja, stolica i dušeka, u skladu sa vrstom materijala i stanjem površine.",
    "usluge_renta_naslov": "Iznajmljivanje mašine",
    "usluge_renta_tekst": "Opcija za korisnike koji žele sami da očiste površine. Dostupno na 24 časa ili za vikend.",
    "usluge_cena_od": "od",
    "usluge_cenovnik": "Preuzmi okvirni cenovnik (PDF)",
    "usluge_video_naslov": "Pogledajte kako izgleda rad",
    "usluge_video_tekst": "Kratak prikaz rada pomaže da vidite kako izgleda postupak dubinskog pranja.",
    "kontakt_naslov": "Kontaktirajte nas",
    "kontakt_uvod": "Pošaljite osnovne podatke i opišite šta želite da se očisti. Forma proverava podatke pre potvrde.",
    "kontakt_ime": "Ime i prezime",
    "kontakt_telefon": "Telefon",
    "kontakt_eposta": "Email",
    "kontakt_usluga": "Usluga",
    "kontakt_izaberi": "Izaberite uslugu",
    "kontakt_auto": "Dubinsko pranje automobila",
    "kontakt_namestaj": "Dubinsko pranje nameštaja",
    "kontakt_renta": "Iznajmljivanje mašine",
    "kontakt_poruka": "Poruka",
    "kontakt_saglasnost": "Saglasan/na sam da se podaci koriste samo za odgovor na ovaj upit.",
    "kontakt_posalji": "Proveri i pošalji",
    "kontakt_podaci_naslov": "Kontakt podaci",
    "kontakt_adresa": "Novi Sad, Srbija",
    "kontakt_radno_vreme": "Pon–Sub: 08:00–19:00",
    "kontakt_mapa_naslov": "Lokacija",
    "podnozje_opis": "Dubinsko pranje automobila i nameštaja i iznajmljivanje mašina za dubinsko pranje.",
    "podnozje_navigacija": "Navigacija",
    "podnozje_kontakt": "Kontakt",
    "preskoci": "Preskoči na sadržaj",
    "proces": "Proces",
    "usluge_auto_1": "Sedišta i nasloni",
    "usluge_auto_2": "Podne obloge i patosnice",
    "usluge_auto_3": "Gepek i dostupne tekstilne površine",
    "usluge_namestaj_1": "Sofe i garniture",
    "usluge_namestaj_2": "Fotelje i stolice",
    "usluge_namestaj_3": "Dušeci i tapacirane površine",
    "usluge_renta_1": "Najam na 24 časa: 2.500 RSD",
    "usluge_renta_2": "Vikend paket: 4.500 RSD",
    "usluge_renta_3": "Depozit: 5.000 RSD",
    "usluge_video_lokalno": "Video se učitava direktno iz foldera video, bez eksternog izvora.",
    "react_veza": "Dodatni React primer (2 stranice)",
    "kontakt_posalji_upit": "Pošaljite upit",
    "oznaka_telefon": "Telefon:",
    "oznaka_eposta": "Email:",
    "oznaka_adresa": "Adresa:",
    "oznaka_radno_vreme": "Radno vreme:",
    "autorska_prava": "© 2026 Dubinski Sjaj. Sva prava zadržana.",
    "onama_cesta-pitanja_oznaka": "Pitanja i odgovori",
    "onama_video_oznaka": "Pogledajte proces",
    "usluge_video_oznaka": "Video prikaz"
  },
  "en": {
    "meni_pocetna": "Home",
    "meni_o_nama": "About",
    "meni_usluge": "Services",
    "meni_kontakt": "Contact",
    "meni_auto": "Car deep cleaning",
    "meni_namestaj": "Furniture deep cleaning",
    "meni_renta": "Machine rental",
    "tema": "Theme",
    "font": "A+",
    "pocetna_oznaka": "Cleanliness you can see and feel",
    "pocetna_naslov": "Deep cleaning without complications.",
    "pocetna_uvod": "Professional deep cleaning for cars and furniture, with machine rental when you prefer to do the work yourself.",
    "pocetna_dugme_usluge": "View services",
    "pocetna_dugme_kontakt": "Request an appointment",
    "pocetna_usluge_naslov": "Three ways to get a cleaner space",
    "pocetna_usluge_tekst": "From a complete car interior to living-room furniture or a machine for self-service cleaning.",
    "kartica_auto_naslov": "Cars",
    "kartica_auto_tekst": "Deep cleaning of seats, floors, trunk and other textile surfaces in the vehicle interior.",
    "kartica_namestaj_naslov": "Furniture",
    "kartica_namestaj_tekst": "Thorough cleaning of sofas, armchairs, chairs, mattresses and other upholstered surfaces.",
    "kartica_renta_naslov": "Rental",
    "kartica_renta_tekst": "Rent a deep-cleaning machine for 24 hours or a weekend, with simple operating instructions.",
    "saznaj_vise": "Learn more →",
    "pocetna_brojka_1": "service types",
    "pocetna_brojka_2": "machine rental",
    "pocetna_brojka_3": "days per week",
    "pocetna_koraci_naslov": "How it works",
    "korak_1_naslov": "Send an enquiry",
    "korak_1_tekst": "Tell us what needs cleaning and the approximate size or type of surface.",
    "korak_2_naslov": "Choose a time",
    "korak_2_tekst": "We confirm the appointment, estimated price and arrival or machine-pickup details.",
    "korak_3_naslov": "Cleaning or pickup",
    "korak_3_tekst": "We perform the service or hand over the machine with clear operating instructions.",
    "poziv_naslov": "Need a price estimate?",
    "poziv_tekst": "Send a short description and we will suggest the right service.",
    "poziv_dugme": "Contact us",
    "onama_oznaka": "About us",
    "onama_naslov": "One company, three practical services.",
    "onama_uvod": "Dubinski Sjaj is conceived as a local company offering professional vehicle and furniture cleaning plus simple equipment rental.",
    "onama_pristup_naslov": "A simple approach",
    "onama_pristup_tekst": "The focus is on a clear agreement, proper surface preparation and extraction-cleaning equipment. No complicated packages or unclear terms.",
    "onama_stavka_1": "We check the surface type and condition before agreeing the job.",
    "onama_stavka_2": "The customer receives an estimated price and duration in advance.",
    "onama_stavka_3": "Rental customers receive short instructions for safe operation.",
    "onama_cesta-pitanja_naslov": "Frequently asked questions",
    "cesta-pitanja_1_pitanje": "How long does car deep cleaning take?",
    "cesta-pitanja_1_odgovor": "The time depends on vehicle size and interior condition. A standard car generally requires several hours of work plus drying time.",
    "cesta-pitanja_2_pitanje": "Can furniture be used immediately?",
    "cesta-pitanja_2_odgovor": "No. After extraction cleaning, the surface needs time to dry completely. The exact time depends on material, ventilation and room temperature.",
    "cesta-pitanja_3_pitanje": "What comes with a rented machine?",
    "cesta-pitanja_3_odgovor": "You receive the machine, basic operating instructions and an explanation of the correct cleaning and return procedure.",
    "onama_video_naslov": "What extraction cleaning looks like",
    "onama_video_tekst": "An example process is shown in an embedded YouTube video as additional multimedia content.",
    "usluge_oznaka": "Services and rental",
    "usluge_naslov": "Choose what you need.",
    "usluge_uvod": "Services are divided into three clear groups to keep the choice and arrangement simple.",
    "usluge_auto_naslov": "Car deep cleaning",
    "usluge_auto_tekst": "Cleaning textile interior surfaces through vacuuming, treatment and extraction of dirt.",
    "usluge_namestaj_naslov": "Furniture deep cleaning",
    "usluge_namestaj_tekst": "Cleaning sofas, loveseats, armchairs, chairs and mattresses according to material type and condition.",
    "usluge_renta_naslov": "Machine rental",
    "usluge_renta_tekst": "For customers who want to clean surfaces themselves. Available for 24 hours or a weekend.",
    "usluge_cena_od": "from",
    "usluge_cenovnik": "Download estimated price list (PDF)",
    "usluge_video_naslov": "See how the work looks",
    "usluge_video_tekst": "A short preview helps show what the deep-cleaning process looks like.",
    "kontakt_naslov": "Contact us",
    "kontakt_uvod": "Send the basic details and describe what you need cleaned. The form validates the data before confirmation.",
    "kontakt_ime": "Full name",
    "kontakt_telefon": "Phone",
    "kontakt_eposta": "Email",
    "kontakt_usluga": "Service",
    "kontakt_izaberi": "Choose a service",
    "kontakt_auto": "Car deep cleaning",
    "kontakt_namestaj": "Furniture deep cleaning",
    "kontakt_renta": "Machine rental",
    "kontakt_poruka": "Message",
    "kontakt_saglasnost": "I agree that these details may be used only to answer this enquiry.",
    "kontakt_posalji": "Validate and send",
    "kontakt_podaci_naslov": "Contact details",
    "kontakt_adresa": "Novi Sad, Serbia",
    "kontakt_radno_vreme": "Mon–Sat: 08:00–19:00",
    "kontakt_mapa_naslov": "Location",
    "podnozje_opis": "Deep cleaning for cars and furniture and rental of deep-cleaning machines.",
    "podnozje_navigacija": "Navigation",
    "podnozje_kontakt": "Contact",
    "preskoci": "Skip to content",
    "proces": "Process",
    "usluge_auto_1": "Seats and backrests",
    "usluge_auto_2": "Floor coverings and mats",
    "usluge_auto_3": "Trunk and accessible textile surfaces",
    "usluge_namestaj_1": "Sofas and sets",
    "usluge_namestaj_2": "Armchairs and chairs",
    "usluge_namestaj_3": "Mattresses and upholstered surfaces",
    "usluge_renta_1": "24-hour rental: 2,500 RSD",
    "usluge_renta_2": "Weekend package: 4,500 RSD",
    "usluge_renta_3": "Deposit: 5,000 RSD",
    "usluge_video_lokalno": "The video loads directly from the local video folder, without an external source.",
    "react_veza": "Additional React example (2 pages)",
    "kontakt_posalji_upit": "Send an enquiry",
    "oznaka_telefon": "Phone:",
    "oznaka_eposta": "Email:",
    "oznaka_adresa": "Address:",
    "oznaka_radno_vreme": "Working hours:",
    "autorska_prava": "© 2026 Dubinski Sjaj. All rights reserved.",
    "onama_cesta-pitanja_oznaka": "Questions and answers",
    "onama_video_oznaka": "See the process",
    "usluge_video_oznaka": "Video preview"
  }
};
let prevodi = null;

async function ucitajPrevode() {
  if (prevodi) return prevodi;

  try {
    const odgovor = await fetch("podaci/prevodi.json");
    if (!odgovor.ok) throw new Error("Datoteka sa prevodima nije dostupna.");
    prevodi = await odgovor.json();
  } catch (greska) {
    // Kada se HTML otvori direktno sa računara, browser može blokirati fetch ka lokalnom JSON fajlu.
    // Zato se koristi ista lokalna JSON struktura kao rezervna vrednost, pa dugme za jezik radi i bez servera.
    prevodi = REZERVNI_PREVODI;
  }

  return prevodi;
}

function primeniPrevod(jezik) {
  const recnik = prevodi?.[jezik];
  if (!recnik) return;

  document.documentElement.lang = jezik;

  document.querySelectorAll("[data-prevod]").forEach((element) => {
    const kljuc = element.dataset.prevod;
    if (recnik[kljuc] !== undefined) element.textContent = recnik[kljuc];
  });

  document.querySelectorAll("[data-prevod-placeholder]").forEach((element) => {
    const kljuc = element.dataset.prevodPlaceholder;
    if (recnik[kljuc] !== undefined) element.placeholder = recnik[kljuc];
  });

  localStorage.setItem(KLJUC_JEZIK, jezik);

  document.querySelectorAll("[data-akcija='jezik']").forEach((dugme) => {
    dugme.textContent = jezik === "sr" ? "EN" : "SR";
    dugme.setAttribute("aria-label", jezik === "sr" ? "Prikaži sajt na engleskom" : "Prikaži sajt na srpskom");
  });
}

function promeniJezik() {
  const trenutniJezik = localStorage.getItem(KLJUC_JEZIK) || "sr";
  primeniPrevod(trenutniJezik === "sr" ? "en" : "sr");
}

async function pripremiPrevod() {
  await ucitajPrevode();
  primeniPrevod(localStorage.getItem(KLJUC_JEZIK) || "sr");

  document.querySelectorAll("[data-akcija='jezik']").forEach((dugme) => {
    dugme.addEventListener("click", promeniJezik);
  });
}

document.addEventListener("DOMContentLoaded", pripremiPrevod);
