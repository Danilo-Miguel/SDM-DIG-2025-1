import express from 'express';
import mongoose from 'mongoose';    
import axios from 'axios';

const app = express();
app.use(express.json());

const mongoUri = "mongodb+srv://profdanilomiguel:sdm*usjt@sdm-dig.qyouzyj.mongodb.net/mongo-microsservices?retryWrites=true&w=majority&appName=SDM-DIG";
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => {
    console.error("MongoDB connection error:", err);
});

const userSchema = new mongoose.Schema({ // Definindo o esquema do usuário
    id: String,
    name: String,
    email: String,
    produto: String,
    quantidade: Number
});

const User = mongoose.model('User', userSchema); // Criando o modelo do usuário

app.post('/usuarios', async (req, res) => {
    try {
    const usuario = req.body;

    //salvar o usuário no banco de dados
    const novoUser = new User(usuario);
    await novoUser.save();


     await axios.post('http://localhost:4000/pedidos', {
        userId: usuario.id,
        produto: usuario.produto,
        quantidade: usuario.quantidade
    // Enviar o usuário para o serviço de produtos
     });

     res.send({message: "Usuário criado com sucesso", usuario: novoUser});
    } catch (error) {
        console.error("Erro ao criar usuário:", error);
        res.status(500).send({message: "Erro ao criar usuário"});
    }
    
});

app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await User.find();
        if (!usuarios || usuarios.length === 0) {
            return res.status(404).send({message: "Nenhum usuário encontrado"});
        }else {
            console.log("Usuários encontrados:", usuarios);
           res.send(usuarios);
        }

    } catch (error) {
        console.error("Erro ao listar usuários:", error);
        res.status(500).send({message: "Erro ao listar usuários"});
    }
});

app.put('/usuarios/:id', async (req, res) => {
    try {
       
        // Atualizar o usuário no banco de dados
        const usuarioAtualizado = await User.findByIdAndUpdate(
            { id: req.params.id },
            req.body,
            { new: true });

        if (!usuarioAtualizado) {
            return res.status(404).send({ message: "Usuário não encontrado" });
        }

        res.send({ message: "Usuário atualizado com sucesso", usuario: usuarioAtualizado });
    } catch (error) {
        res.status(500).send({ message: "Erro ao atualizar usuário" });
    }
});

app.delete('/usuarios/:id', async (req, res) => {
    try {
        const usuarioDeletado = await User.findByIdAndDelete({id: req.params.id});

        if (!usuarioDeletado) {
            return res.status(404).send({ message: "Usuário não encontrado" });
        }

        res.send({ message: "Usuário deletado com sucesso", usuario: usuarioDeletado });
    } catch (error) {
        res.status(500).send({ message: "Erro ao deletar usuário" });
    }
}   );

app.listen(3000, () => {
    console.log("User service running on port 4000");
});