const express = require("express");  // Framework para criar a API
const axios = require("axios");  // Biblioteca para fazer requisições HTTP

const app = express();
app.use(express.json());  // Permite receber JSON no corpo das requisições

// Rota para cadastrar um usuário
app.post("/usuarios", async (req, res) => {
    const usuario = req.body;

    // Envia um pedido ao Order-Service via HTTP
    await axios.post("http://localhost:4000/pedidos", { userId: usuario.id });

    res.send({ message: "Usuário cadastrado!", usuario });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => console.log("User-Service rodando na porta 3000"));
