
exports.up = function (knex) {
    return knex.schema
        .createTable('complaint', function (table) {
            table.increments('id');
            table.string('description', 255).notNullable();
            table.string('title', 255).notNullable();
            table.string('image_url', 255).notNullable();
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("complaint");
};

exports.config = { transaction: false };
