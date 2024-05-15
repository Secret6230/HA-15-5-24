const express = require("express");
const app = express();

let hobbys = [1, 2, 3, 4, 5];
let einkaufsliste = [6, 7, 8, 9, 10];
let Kombination = hobbys.concat(einkaufsliste);
let Hilfe = "Versuche /html, /einkausliste, /hobbys, /Kombination";

// Pfad zur HTML-Datei
let htmlPath = "C:/Users/akink/Downloads/Cloud Computing/SCREENSHOT UND HAUSAUFGABEN/HA-15.5.24/HA-15-5-24.html";

app.get("/hobbys", (req, res) => {
  res.send(hobbys);
});

app.get("/einkaufsliste", (req, res) => {
  res.send(einkaufsliste);
});

app.get("/Kombination", (req, res) => {
  res.send(Kombination);
});

app.get("/html", (req, res) => {
  // Hier wird die HTML-Datei als statische Datei gesendet
  res.sendFile(htmlPath);
});

app.get("/hilfe", (req, res) => {
  // Hilfsmeldung senden
  res.send(Hilfe);
});

app.listen(3000);
