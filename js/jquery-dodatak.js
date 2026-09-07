"use strict";

$(function () {
  $(".pitanje").on("click", function () {
    const odgovor = $(this).next(".odgovor");
    const otvoren = odgovor.css("display") !== "none";

    $(".odgovor").css("display", "none");
    $(".pitanje").attr("aria-expanded", "false");

    if (!otvoren) {
      odgovor.css("display", "block");
      $(this).attr("aria-expanded", "true");
    }
  });
});
