const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(express.json());

// Registra as rotas
app.use('/api', userRoutes); // Prefixo para as rotas de API

// Tratamento de erros genérico
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

app.get('/api', (req, res) => {
    res.json({ message: 'Bem-vindo à API!' });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});