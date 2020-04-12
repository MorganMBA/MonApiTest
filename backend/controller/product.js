const Product = require('../model/product');

exports.CreatingProduct = (req, res, next) => {
    const product = new Product({
        ...req.body
    });
    product.save()
    .then( product => res.status(201).json({ product }))
    .catch( error => res.status(400).json({ error }));
};

exports.FindProduct = (req, res, next) => {
    Product.find()
    .then( products => res.status(200).json({ products }))
    .catch(error => res.status(400).json({ error }));
};

exports.FindOneProduct = (req, res, next) => {
    Product.findOne({ _id: req.params.id})
    .then( product => res.status(200).json({ product }))
    .catch( error => res.status(400).json({ error }));
};

exports.UpdateOneProduct = (req, res, next) => {
    Product.updateOne({ _id: req.params.id}, { ...req.body, _id: req.params.id})
    .then(() => res.status(200).json({ message: 'Modified!'}))
    .catch(error => res.status(400).json({ error }));
};

exports.DeleteOneProduct = (req, res, next) => {
    Product.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Deleted!'}))
    .catch(error => res.status(400).json({ error }));
};

