const express = require('express');
const jsxEngine = require('jsx-view-engine');
require('dotenv').config();
const database = require('./config/database');
const Pokemon = require('./models/Pokemon');

const pokemon = require('./models/pokemons');

const app = express();
const  PORT = 3000;

//App config
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//middleware
app.use(express.urlencoded({extended: false}));

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', async (req, res) => {
    const pokemonFromDB = await Pokemon.find({});

    res.render('Index', {
        pokemon: pokemonFromDB
    });
});

app.get('/pokemon/new', (req, res) => {
    res.render('New');
})

app.get('/pokemon/:id', async (req, res) => {
    const { id } = req.params;
    const pokemon = await Pokemon.findById(id);
    
    res.render('Show', {
        pokemon: pokemon
    })
})

app.post('/pokemon', async (req, res) => {
    try{
        const createPokemon = await Pokemon.create(req.body);
        console.log(createPokemon);
    }catch(e){
        console.log(e);
    }
    res.redirect('/pokemon');
})

database();

app.listen(PORT, () => {
    console.log('Server is running...');
});