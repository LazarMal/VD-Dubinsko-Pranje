"use strict";

const napraviElement = React.createElement;

const usluge = [
  { naziv: "Dubinsko pranje automobila", opis: "Sedišta, pod, patosnice i dostupne tekstilne površine.", cena: "od 3.500 RSD" },
  { naziv: "Dubinsko pranje nameštaja", opis: "Sofe, fotelje, stolice, dušeci i tapacirane površine.", cena: "od 450 RSD" },
  { naziv: "Iznajmljivanje mašine", opis: "Mašina za ekstrakciono pranje na 24 časa ili za vikend.", cena: "od 2.500 RSD" }
];

function Zaglavlje() {
  return napraviElement("header", { className: "dodatno-zaglavlje" },
    napraviElement("nav", { className: "dodatni-kontejner dodatna-navigacija", "aria-label": "Navigacija dodatnog React dela" },
      napraviElement("a", { className: "dodatni-brend", href: "pocetna.html" }, "Dubinski Sjaj — React"),
      napraviElement("a", { href: "pocetna.html" }, "Početna"),
      napraviElement("a", { href: "usluge.html" }, "Usluge"),
      napraviElement("a", { href: "../index.html" }, "Glavni sajt")
    )
  );
}

function KarticaUsluge(svojstva) {
  return napraviElement("article", { className: "dodatna-kartica" },
    napraviElement("h2", null, svojstva.naziv),
    napraviElement("p", null, svojstva.opis),
    napraviElement("div", { className: "dodatna-cena" }, svojstva.cena)
  );
}

function UslugeAplikacija() {
  return napraviElement(React.Fragment, null,
    napraviElement(Zaglavlje),
    napraviElement("main", null,
      napraviElement("section", { className: "dodatna-uvodna" },
        napraviElement("div", { className: "dodatni-kontejner" },
          napraviElement("p", null, "DRUGA REACT STRANICA"),
          napraviElement("h1", null, "Usluge kroz jednostavne komponente."),
          napraviElement("p", null, "Podaci se nalaze u jednom nizu, a svaka usluga se prikazuje kroz istu React komponentu KarticaUsluge.")
        )
      ),
      napraviElement("section", { className: "dodatna-sekcija" },
        napraviElement("div", { className: "dodatni-kontejner dodatne-kartice" },
          usluge.map((usluga) => napraviElement(KarticaUsluge, { key: usluga.naziv, ...usluga }))
        )
      )
    ),
    napraviElement("footer", { className: "dodatno-podnozje" }, napraviElement("div", { className: "dodatni-kontejner" }, "Dubinski Sjaj — dodatni React deo"))
  );
}

ReactDOM.render(napraviElement(UslugeAplikacija), document.getElementById("koren-aplikacije"));
