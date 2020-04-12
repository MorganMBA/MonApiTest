const express = require('express');
const router = express.Router();
const productCtrl = require('../controller/product');

router.post('/', productCtrl.CreatingProduct);

router.get('/', productCtrl.FindProduct);

router.get('/:id', productCtrl.FindOneProduct);

router.put('/:id', productCtrl.UpdateOneProduct);

router.delete('/:id', productCtrl.DeleteOneProduct);

module.exports = router;