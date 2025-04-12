const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const cidades = {
    "AC": ["Rio Branco", "Cruzeiro do Sul", "Sena Madureira"],
    "AL": ["Maceió", "Arapiraca", "Palmeira dos Índios"],       
    "AP": ["Macapá", "Santana", "Laranjal do Jari"],
    "AM": ["Manaus", "Parintins", "Itacoatiara"],   
    "BA": ["Salvador", "Feira de Santana", "Vitória da Conquista"],
    "CE": ["Fortaleza", "Caucaia", "Juazeiro do Norte"],
    "DF": ["Brasília", "Taguatinga", "Ceilândia"],
     "ES": ["Vitória", "Vila Velha", "Serra"],
    "GO": ["Goiânia", "Aparecida de Goiânia", "Anápolis"],
    "MA": ["São Luís", "Imperatriz", "Caxias"],
    "MT": ["Cuiabá", "Várzea Grande", "Rondonópolis"],
    "MS": ["Campo Grande", "Dourados", "Três Lagoas"],
    "MG": ["Belo Horizonte", "Uberlândia", "Contagem"],
    "PA": ["Belém", "Ananindeua", "Santana"],
    "PB": ["João Pessoa", "Campina Grande", "Patos"],
    "PR": ["Curitiba", "Londrina", "Maringá"],
    "PE": ["Recife", "Olinda", "Jaboatão dos Guararapes"],
    "PI": ["Teresina", "Parnaíba", "Picos"],
    "RJ": ["Rio de Janeiro", "Niterói", "Petrópolis"],
    "RN": ["Natal", "Mossoró", "Parnamirim"],
    "RS": ["Porto Alegre", "Caxias do Sul", "Pelotas"],
    "RO": ["Porto Velho", "Ji-Paraná", "Vilhena"],
    "RR": ["Boa Vista", "Rorainópolis", "Caracaraí"],
    "SC": ["Florianópolis", "Joinville", "Blumenau"],
    "SP": ["São Paulo", "Campinas", "Santos"],  
    "SE": ["Aracaju", "Nossa Senhora do Socorro", "Lagarto"],
    "TO": ["Palmas", "Araguaína", "Gurupi"]


};

app.get('/cidades', (req, res) => {
    res.json(cidades);
});

app.get('/cidades/sigla/:sigla', (req, res) => {
    const sigla = req.params.sigla.toUpperCase();
    const cidadesEstado = cidades[sigla];
    if (cidadesEstado) {
        res.json(cidadesEstado);
    } else {
        res.status(404).json({ error: 'Estado não encontrado' });
    }
});

app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
});