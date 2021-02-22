const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('template', {
  name: {
    type: Sequelize.STRING,
  },
  frontHTML: {
    type: Sequelize.STRING,
  },
  backHTML: {
    type: Sequelize.STRING,
  },
  frontImageURL: {
    type: Sequelize.STRING,
  },
  backImageURL: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.TEXT,
  },
});
