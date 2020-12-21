const Product = require('../models/product').товар;
const products = [];
const fs = require('fs');

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {
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
        res.render('shop/product-list', {
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

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        pageTitle: 'Корзина',
        path: '/cart'
    })
}

exports.getAdminProducts = (req, res, next) => {
    res.render('admin/products', {
        pageTitle: 'Товары',
        path: '/admin/products'
    })
}

exports.getProductsList = (req, res, next) => {
    Product.fetchAll(products => {
        console.log(products)
        res.render('shop/product-list', {
            prods: products,
            pageTitle: 'Ваши товары',
            path: '/products',
            hasProducts: products.length > 0,
            activeShop: true
        });
    });
}