'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfDetailSchema extends Schema {
  up () {
    this.create('profile_skills', (table) => {
      table.increments()
      table.integer('profile_id', 80)
      table.string('skills', 150)
      table.timestamps()
    })
  }

  down () {
    this.drop('profile_skills')
  }
}

module.exports = ProfDetailSchema
