exports.up = (knex) => {
  return knex.schema.createTable('addresses', table => {
    table.increments()
    table.string('line_1').notNullable()
    table.string('line_2').notNullable()
    table.string('city').notNullable()
    table.string('state').notNullable()
    table.string('zip').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('addresses')
}
