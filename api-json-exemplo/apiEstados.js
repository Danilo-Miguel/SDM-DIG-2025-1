

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Lista de estados
const estados = [
  { sigla: "SP", nome: "São Paulo" },
  { sigla: "RJ", nome: "Rio de Janeiro" },
  { sigla: "MG", nome: "Minas Gerais" }
];

// Rota para listar todos os estados
app.get("/estados", (req, res) => {
  res.json(estados);
});

// Inicializa o servidor na porta 4000
app.listen(4000, () => {
  console.log("API de Estados rodando na porta 4000");
});

