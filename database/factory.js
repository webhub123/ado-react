'use strict'



/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/ProfileSkill', async (faker, i ,data) => {
  return {
    skills : data[i].value
  }
})
