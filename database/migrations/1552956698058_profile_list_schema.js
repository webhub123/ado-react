'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfileListSchema extends Schema {
  up () {
    this.create('profile_list', (table) => {
      table.increments()
      table.string('fullname', 350)
      table.integer('age', 80)
      table.string('email', 350)
      table.string('address', 550)
      table.timestamps()
    })
  }

  down () {
    this.drop('profile_list')
  }
}

module.exports = ProfileListSchema
