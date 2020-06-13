const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const db = {}

const sequelize = new Sequelize('bunkylabs', 'bunky', 'onetwothree', {
  dialect: 'sqlite',
  storage: './bunkylabs.sqlite',
  host: 'localhost'
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db