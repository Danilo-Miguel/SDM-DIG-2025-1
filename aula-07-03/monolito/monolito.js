const express = require("express");  // Importa o Express
const app = express();  // Cria a aplicação Express

app.use(express.json());  // Permite que o servidor receba JSON no corpo das requisições

// Simulando um banco de dados na memória (lista de usuários e pedidos)
let usuarios = [];
let pedidos = [];

// Rota para cadastrar um usuário
app.post("/usuarios", (req, res) => {
    const usuario = req.body;  // Recebe o usuário enviado na requisição
    usuarios.push(usuario);  // Adiciona ao "banco de dados" em memória
    res.send({ message: "Usuário cadastrado!", usuario });  // Retorna a resposta
});

// Rota para criar um pedido
app.post("/pedidos", (req, res) => {
    const pedido = req.body;
    pedidos.push(pedido);
    res.send({ message: "Pedido criado!", pedido });
});

// Rota para listar usuários e pedidos cadastrados
app.get("/dados", (req, res) => {
    res.send({ usuarios, pedidos });
});

// Inicia o servidor na porta 3000
app.listen(3000, () => console.log("Servidor monolítico rodando na porta 3000"));
