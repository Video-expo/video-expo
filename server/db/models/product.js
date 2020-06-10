const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  // price: {
  //   type: Sequelize.INTEGER,
  //   validate: {
  //     min: 0
  //   },
  //   allowNull: false
  // },
  // inventory: {
  //   type: Sequelize.INTEGER,
  //   defaultValue: 0,
  //   validate: {
  //     min: 0
  //   }
  // },
  video: {
    type: Sequelize.STRING,
    defaultValue: '/img/teaDefault.jpg'
  }
})
module.exports = Product
