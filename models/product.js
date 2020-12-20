const fs = require('fs');
const path = require('path');

class Product {
    constructor(название, цена, описание) {
        this.title = название;
        this.price = цена;
        this.desc = описание;
    }

    save() {
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if(!err) {
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFileSync(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll(cb) {
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
        );
        fs.readFile(p, (err, fileContent) => {
            if(err) {
                cb([]);
            }
            cb(JSON.parse(fileContent));
        });
    }

    static clear() {
        const p = path.join(
            path.dirname(process.mainModule.filename), 
            'data', 
            'products.json'
        );
        fs.writeFile(p, '[]', (err) => {
            if(err){
                console.log(err);
                return;
            }
            console.log('\x1b[31m Корзина очищена \x1b[0m');
        })
    }
};

module.exports = {
    товар: Product
}