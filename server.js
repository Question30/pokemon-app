const express = require('express');
const jsxEngine = require('jsx-view-engine');

const pokemon = require('./models/pokemon');

const app = express();
const  PORT = 3000;

//App config
app.set('view engine', 'jsx');
app.engine('jsx', jsxEngine());

//Routes
app.get('/', (req, res) => {
    res.send('Welcome to the Pokemon App!');
});

app.get('/pokemon', (req, res) => {
    res.render('Index', {
        pokemon
    });
});

app.get('/pokemon/:id', (req, res) => {
    const { id } = req.params;
    
    res.render('Show', {
        pokemon: pokemon[id]
    })
})

app.listen(PORT, () => {
    console.log('Server is running...');
});