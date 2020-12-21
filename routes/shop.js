const path = require('path');

const express = require('express');

const productsController = require('../controllers/products');;

const router = express.Router();

router.get('/clear', productsController.clearPoducts);

router.get('/', productsController.getProducts);
router.get('/cart', productsController.getCart);
router.get('/admin/products', productsController.getAdminProducts);
router.get('/products', productsController.getProductsList);


module.exports = router;
