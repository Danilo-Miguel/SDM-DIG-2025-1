const express = require("express");  // Importa o Express
const app = express();

app.use(express.json());  // Permite receber JSON no corpo das requisições

// Rota para processar um pedido
app.post("/pedidos", (req, res) => {
    const pedido = req.body;
    console.log("Pedido recebido:", pedido);
    res.send({ message: "Pedido processado!", pedido });
});

// Inicia o servidor na porta 4000
app.listen(4000, () => console.log("Order-Service rodando na porta 4000"));
