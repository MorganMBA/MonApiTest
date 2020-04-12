const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const productRoutes = require('./routes/product');

    mongoose.connect('mongodb+srv://morganMba:@rafaT2000@cluster0-21dbt.mongodb.net/test?retryWrites=true&w=majority',
        { useNewUrlParser: true,
            useUnifiedTopology: true })
            .then(() => console.log('Connexion à MongoDB réussie !'))
            .catch(() => console.log('Connexion à MongoDB échouée !'));

    const app = express();

    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    });
    
    app.use('/api/products', productRoutes);

module.exports = app;