exports.up = function(knex) {
  return knex.schema
    .createTable('products', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('category').notNullable();
      table.string('certification');
      table.text('description');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('outlets', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('region').notNullable();
      table.decimal('latitude', 10, 8);
      table.decimal('longitude', 11, 8);
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('faqs', (table) => {
      table.increments('id').primary();
      table.string('question').notNullable();
      table.text('answer').notNullable();
      table.string('lang').defaultTo('en');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
    .createTable('outlet_products', (table) => {
      table.integer('outlet_id').unsigned().notNullable();
      table.integer('product_id').unsigned().notNullable();
      table.primary(['outlet_id', 'product_id']);
      table.foreign('outlet_id').references('id').inTable('outlets').onDelete('CASCADE');
      table.foreign('product_id').references('id').inTable('products').onDelete('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('outlet_products')
    .dropTableIfExists('faqs')
    .dropTableIfExists('outlets')
    .dropTableIfExists('products');
};