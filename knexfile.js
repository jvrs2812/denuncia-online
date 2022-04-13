// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  test: {
    client: 'mysql',
    connection: {
      database: 'heroku_31e9fde7fea79b9',
      user: 'bef9637368318f',
      password: '713480b4',
      host: 'us-cdbr-east-05.cleardb.net'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  development: {
    client: 'mysql',
    connection: {
      database: 'heroku_31e9fde7fea79b9',
      user: 'bef9637368318f',
      password: '713480b4',
      host: 'us-cdbr-east-05.cleardb.net'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'heroku_31e9fde7fea79b9',
      user: 'bef9637368318f',
      password: '713480b4',
      host: 'us-cdbr-east-05.cleardb.net'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'heroku_31e9fde7fea79b9',
      user: 'bef9637368318f',
      password: '713480b4',
      host: 'us-cdbr-east-05.cleardb.net'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
