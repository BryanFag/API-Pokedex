const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors());

app.get('/pokemon/:name', async (req, res) => {
    try {
        const pokemonName = req.params.name;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        res.json(response.data);
    } catch (error) {
        res.status(404).json({ error: 'Pokémon não encontrado' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});