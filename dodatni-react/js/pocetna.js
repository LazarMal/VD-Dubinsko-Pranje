"use strict";

const napraviElement = React.createElement;

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

function PocetnaAplikacija() {
  return napraviElement(React.Fragment, null,
    napraviElement(Zaglavlje),
    napraviElement("main", null,
      napraviElement("section", { className: "dodatna-uvodna" },
        napraviElement("div", { className: "dodatni-kontejner dodatna-mreza" },
          napraviElement("div", null,
            napraviElement("p", null, "DODATNI PRIMER PRIMENE REACT-A"),
            napraviElement("h1", null, "Ista tema, druga tehnologija."),
            napraviElement("p", null, "Ove dve stranice su odvojeni dodatak glavnom višestraničnom sajtu. Napravljene su lokalnim React bibliotekama i ne menjaju obavezni deo projekta."),
            napraviElement("a", { className: "dodatno-dugme", href: "usluge.html" }, "Pogledaj React usluge")
          ),
          napraviElement("img", { className: "dodatna-slika", src: "../slike/pranje-automobila.jpg", alt: "Prikaz dubinskog pranja automobila" })
        )
      ),
      napraviElement("section", { className: "dodatna-sekcija" },
        napraviElement("div", { className: "dodatni-kontejner" },
          napraviElement("h2", null, "Zašto postoje ove stranice?"),
          napraviElement("p", null, "Služe kao izdvojen primer primene JavaScript razvojnog okvira na istoj temi, dok glavni sajt ostaje urađen prema obaveznim pravilima.")
        )
      )
    ),
    napraviElement("footer", { className: "dodatno-podnozje" }, napraviElement("div", { className: "dodatni-kontejner" }, "Dubinski Sjaj — dodatni React deo"))
  );
}

ReactDOM.render(napraviElement(PocetnaAplikacija), document.getElementById("koren-aplikacije"));
