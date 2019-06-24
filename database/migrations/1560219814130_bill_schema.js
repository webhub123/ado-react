'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BillSchema extends Schema {
  up () {
    this.create('bills', (table) => {
      table.string('name', 80)
      table.string('occurance', 80)
      table.timestamps()
    })
  }

  down () {
    this.table('bills', (table) => {
      // reverse alternations
    })
  }
}

module.exports = BillSchema
