

const express = require("express");
const cors = require("cors");
// const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

// Rota que busca estados e cidades
app.get("/estados-cidades", async (req, res) => {
  try {
    // Primeiro, busca os estados na API de Estados
    const estadosRes = await fetch("http://localhost:4000/estados");
    const estados = await estadosRes.json();

    // Para cada estado, busca as cidades na API de Cidades
    const estadosCidades = await Promise.all(estados.map(async (estado) => {
      const cidadesRes = await fetch(`http://localhost:5000/cidades/${estado.sigla}`);
      const cidades = await cidadesRes.json();
      return { ...estado, cidades };
    }));

    res.json(estadosCidades);
  } catch (error) {
    console.error("Erro ao buscar estados e cidades:", error.message);
    res.status(500).json({ error: "Erro ao buscar estados e cidades", details: error.message });
  }
});

// Inicializa o servidor na porta 6000
app.listen(6000, () => {
  console.log("API Intermediária rodando na porta 6000");
});

