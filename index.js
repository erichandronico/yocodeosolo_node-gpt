require('dotenv').config()
const express = require('express');
const cors  = require('cors');

const app = express();
app.use( cors() );
app.use( express.json() );

console.log('Iniciando servidor');

app.use('/gpt', require('./routes/gpt'));

app.listen( process.env.PORT, () => console.log(`Servidor escuchando ${process.env.PORT}`) );
