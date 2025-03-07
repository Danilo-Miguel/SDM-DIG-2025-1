const { Kafka } = require("kafkajs");
const kafka = new Kafka({ clientId: "order-service", brokers: ["kafka:9092"] });

const consumer = kafka.consumer({ groupId: "order-group" });

const run = async () => {
    await consumer.connect();  // Conecta ao Kafka
    await consumer.subscribe({ topic: "user-created", fromBeginning: true });  // Inscreve-se no tópico

    await consumer.run({
        eachMessage: async ({ message }) => {
            const user = JSON.parse(message.value.toString());
            console.log(`Novo usuário detectado: ${user.nome} - Criando pedido automático...`);
        }
    });
};

run().catch(console.error);
