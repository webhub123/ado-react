'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Profile extends Model {

    static get hidden() {
        return ['created_at','updated_at']
    }

    profile_skills() {
        return this.hasMany('App/Models/ProfileSkill')
    }


}

module.exports = Profile
