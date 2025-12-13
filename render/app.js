const express = require("express");
const app = express();

app.set("view engine", "ejs");

// Rota página 1
app.get("/", (req, res) => {
  res.render("pagina1");
});

// Rota página 2
app.get("/pagina2", (req, res) => {
  res.render("pagina2");
});

// Rota página 3
app.get("/pagina3", (req, res) => {
  res.render("pagina3");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
