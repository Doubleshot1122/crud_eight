exports.up = (knex) => {
  return knex.schema.createTable('contacts', table => {
    table.increments()
    table.string('first_name').notNullable()
    table.string('last_name').notNullable()
    table.string('phone_number').notNullable()
    table.string('email_address').notNullable()
    table.text('image_url').notNullable()
    table.integer('addresses_id').notNullable()
    table.timestamps(true, true)
  })
}

exports.down = (knex) => {
  return knex.schema.dropTable('contacts')
}
