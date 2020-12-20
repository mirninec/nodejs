const Product = require('../models/product').товар;
const products = require('../models/product').products;
const fs = require('fs');

exports.getAddProduct = (req, res, next) => {
    res.render('add-product', {
        pageTitle: 'Добавить продукт',
        path: '/admin/add-product'
    });
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title, req.body.price, req.body.desc);
    product.save();
    console.log('Добавляем товар \x1b[36m',  req.body.title, req.body.price, req.body.desc, '\x1b[0m');
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        console.log(products)
        res.render('shop', {
            prods: products,
            pageTitle: 'Ваши товары',
            path: '/',
            hasProducts: products.length > 0,
            activeShop: true
        });
    });

}

exports.clearPoducts = (req, res, next) => {

    console.log('Очищаем корзину');
    Product.clear();
    res.redirect('/');
}
