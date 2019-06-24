'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ProfileSkill extends Model {

    static get hidden() {
        return ['created_at','updated_at','id','profile_id']
    }

    profile() {
        return this.belongsTo('App/Models/Profile')
    }
}

module.exports = ProfileSkill
