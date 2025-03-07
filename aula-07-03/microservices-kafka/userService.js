const { Kafka } = require("kafkajs");  // Importa o cliente Kafka
const kafka = new Kafka({ clientId: "user-service", brokers: ["kafka:9092"] });

const producer = kafka.producer();  // Cria um produtor Kafka

const express = require("express");
const app = express();
app.use(express.json());

// Rota para cadastrar um usuário
app.post("/usuarios", async (req, res) => {
    const usuario = req.body;
    
    await producer.connect();  // Conecta ao Kafka
    await producer.send({
        topic: "user-created",  // Nome do tópico Kafka
        messages: [{ value: JSON.stringify(usuario) }]  // Envia os dados do usuário
    });
    await producer.disconnect();

    res.send({ message: "Usuário cadastrado e evento enviado!", usuario });
});

// Inicia o servidor
app.listen(3000, () => console.log("User-Service rodando na porta 3000"));
