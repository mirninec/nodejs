const Sequalize = require('sequelize');

const sequelize = new Sequalize('node-complete', 'root', 'z', {
    dialect: 'mysql',
    host: 'localhost'
});