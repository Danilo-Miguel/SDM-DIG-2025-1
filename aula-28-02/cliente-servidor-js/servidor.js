const express = require('express');

const app = express();

app.get('/ola', (req, res)=>{
    res.send("Olá, tudo bem?")
});

const PORT = 5000;

app.listen(PORT, () => {
   console.log(`Servidor rodando em http://127.0.0.1:${PORT}`); 
});