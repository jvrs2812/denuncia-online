const knex = require('knex');
const configuration = require('../../knexfile.js');

const config = process.env.NODE_ENV === 'test' ? configuration.test : process.env.CLEARDB_DATABASE_URL;

const connection = knex(config);

module.exports = connection;
