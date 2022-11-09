/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  knex.schema.createTable('topics', function (table) {
    table.increments('id');
    table.string('name');
  });

  knex.schema.createTable('sessions', function (table) {
    table.increments('id');
    table.string('name');
    table.date('date');
    table.foreign('topic_id').references('id').inTable('topics');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  knex.schema.dropTable('topics');
  knex.schema.dropTable('sessions');
};
