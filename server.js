
const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Página inicial');
});

app.get('/sobre', (req, res) => {
  res.send('Servidor criado com Express!');
});

app.get('/hora', (req, res) => {
  const horaAtual = new Date().toLocaleTimeString(); 
  res.send(`Hora atual do servidor: ${horaAtual}`);
});

app.get('/saudacao/:nome', (req, res) => {
 
  const nome = req.params.nome;
  res.send(`Olá, ${nome}!`);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
