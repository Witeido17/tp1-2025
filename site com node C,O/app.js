const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Servidor rodando na porta " + PORT);
});

app.set("view engine", "ejs");

// Rota página 1
app.get("/contato", (req, res) => {
  res.render("contato");
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

