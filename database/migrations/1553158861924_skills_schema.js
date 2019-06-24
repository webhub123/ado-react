'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SkillsSchema extends Schema {
  up () {
    this.create('skills', (table) => {
      table.increments()
      table.string('skills',250)
      table.timestamps()
    })
  }

  down () {
    this.drop('skills')
  }
}

module.exports = SkillsSchema
