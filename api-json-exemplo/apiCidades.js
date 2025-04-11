

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Lista de cidades por estado
const cidades = {
  "SP": ["São Paulo", "Campinas", "Santos"],
  "RJ": ["Rio de Janeiro", "Niterói", "Campos dos Goytacazes"],
  "MG": ["Belo Horizonte", "Uberlândia", "Juiz de Fora"]
};

// Rota que retorna as cidades de um estado
app.get("/cidades/:estado", (req, res) => {
  const estado = req.params.estado.toUpperCase();
  res.json(cidades[estado] || []);
});

// Inicializa o servidor na porta 5000
app.listen(5000, () => {
  console.log("API de Cidades rodando na porta 5000");
});

