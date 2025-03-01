// Importa o módulo 'express' para criar o servidor web
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();

// Rota principal: define o comportamento quando a raiz ("/") for acessada
app.get('/', (req, res) => {
    // Responde com a mensagem 'Hello, Express!' para a requisição
    res.send('Hello, Express!');
});

// Define a porta em que o servidor vai rodar
const PORT = 5000;

// Inicia o servidor e fica ouvindo na porta especificada
app.listen(PORT, () => {
    // Exibe uma mensagem no console quando o servidor estiver rodando
    console.log(`Servidor rodando em http://127.0.0.1:${PORT}`);
});
