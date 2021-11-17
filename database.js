const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('test-db','user','1234',{
    dialect: 'sqlite',
    host: './dev.sqlite'
});

module.exports = sequelize;