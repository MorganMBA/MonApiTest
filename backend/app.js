const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Produt = require('./model/Product');

    mongoose.connect('mongodb+srv://morganMba:@rafaT2000@cluster0-21dbt.mongodb.net/test?retryWrites=true&w=majority',
        { useNewUrlParser: true,
            useUnifiedTopology: true })
            .then(() => console.log('Connexion à MongoDB réussie !'))
            .catch(() => console.log('Connexion à MongoDB échouée !'));

    const app = express();

    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
    });

    app.use(bodyParser.json());

    app.post('/api/products', (req, res, next) => {
        const product = new Produt({
            ...req.body
        });
        product.save()
        .then( product => res.status(201).json({ product }))
        .catch(error => res.status(400).json({ error }));
    });

    app.get('/api/products/:id', (req, res, next) => {
        Produt.findOne({ _})
        .then()
        .catch();
    })

    app.get('/api/products', (req, res, next) => {
        Produt.find()
        .then( products => res.status(201).json(products))
        .catch(error => res.status(400).json({ error }));
        next();
    });

module.exports = app;