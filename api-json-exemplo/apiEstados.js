const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const estados = [
    { sigla: "AC", nome: 'Acre' },
    { sigla: "AL", nome: 'Alagoas' },
    { sigla: "AP", nome: 'Amapá' },
    { sigla: "AM", nome: 'Amazonas' },
    { sigla: "BA", nome: 'Bahia' },
    { sigla: "CE", nome: 'Ceará' },
    { sigla: "DF", nome: 'Distrito Federal' },
    { sigla: "ES", nome: 'Espírito Santo' },
    { sigla: "GO", nome: 'Goiás' },
    { sigla: "MA", nome: 'Maranhão' },
    { sigla: "MT", nome: 'Mato Grosso' },
    { sigla: "MS", nome: 'Mato Grosso do Sul' },
    { sigla: "MG", nome: 'Minas Gerais' },
    { sigla: "PA", nome: 'Pará' },
    { sigla: "PB", nome: 'Paraíba' },
    { sigla: "PR", nome: 'Paraná' },
    { sigla: "PE", nome: 'Pernambuco' },
    { sigla: "PI", nome: 'Piauí' },
    { sigla: "RJ", nome: 'Rio de Janeiro' },
    { sigla: "RN", nome: 'Rio Grande do Norte' },
    { sigla: "RS", nome: 'Rio Grande do Sul' },
    { sigla: "RO", nome: 'Rondônia' },
    { sigla: "RR", nome: 'Roraima' },
    { sigla: "SC", nome: 'Santa Catarina' },
    { sigla: "SP", nome: 'São Paulo' },
    { sigla: "SE", nome: 'Sergipe' },
    { sigla: "TO", nome: 'Tocantins' }
];

// Rota para obter todos os estados
app.get('/estados', (req, res) => {
    res.json(estados);
});

// Rota para obter um estado específico pelo código
app.get('/estados/nome/:nome', (req, res) => {
    //const sigla = req.params.sigla.toUpperCase();
    const nome = req.params.nome;

    console.log(nome);
    //const estado = estados.find(e => e.sigla === sigla);
    const estado = estados.find(e => e.nome == nome);
    console.log(estado);
    if (estado) {
        res.json(estado);
    } else {
        res.status(404).json({ error: 'Estado não encontrado' });
    }
});

// Rota para adicionar um novo estado
// app.post('/estados', (req, res) => {
//     const novoEstado = req.body;
//     estados.push(novoEstado);s
//     res.status(201).json(novoEstado);
// });

// Rota para atualizar um estado existente
// app.put('/estados/:sigla', (req, res) => {
//     const sigla = req.params.sigla.toUpperCase();        
//     const estadoIndex = estados.findIndex(e => e.sigla === sigla);   

//     if (estadoIndex !== -1) {        
//         estados[estadoIndex] = req.body;
//         res.json(estados[estadoIndex]);
//     } else {
//         res.status(404).json({ error: 'Estado não encontrado' });

app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
}
);
