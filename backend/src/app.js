const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://dev-gabriel-cancio:AK47762M4556@cluster0-08vwv.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(routes);

module.exports = app;
// Vídeo (39:14)
// Lembrar de mudar o usuário do Mongo e cirar uma variável ambiente para deixa-lo seguro