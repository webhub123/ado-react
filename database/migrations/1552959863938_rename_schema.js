'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RenameSchema extends Schema {
  up () {
    // this.table('renames', (table) => {
    //   // alter table
    // })

    this.rename('profile_list','profiles')
  }

  down () {
    // this.table('renames', (table) => {
    //   // reverse alternations
    // })
  }
}

module.exports = RenameSchema
