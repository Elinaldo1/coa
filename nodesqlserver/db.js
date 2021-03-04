const Sequelize = require('sequelize');

const sequelize = new Sequelize('coa', 'superchoque','superchoque1', {

  host:'mysql742.umbler.com',
    dialect: 'mysql',
    port: 41890,
    options: {
      enableArithAbort:true,
       

    }

})

module.exports = sequelize;