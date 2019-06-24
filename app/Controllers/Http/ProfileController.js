'use strict'

const profileModel = use('App/Models/Profile')
const profileSkillModel = use('App/Models/ProfileSkill')
const skillModel = use('App/Models/Skill')

class ProfileController {

    async profileLists({ response }) {

        let profiles = await profileModel.all()
        let skills = await skillModel.all()
        return response.json({ profiles : profiles, skills : skills })
    }

    async saveProfile({ request, response }) {

        let data = request.input('data')
        let skills = request.input('skills')
        let profile = new profileModel()

        profile.fullname = data.fullname
        profile.age = data.age
        profile.email = data.email
        profile.address = data.address

        await profile.save()
        await profile.profile_skills().createMany(skills) 
  
        return response.json(profile);
    }

    async updateProfile({ request, response, params }) {

        let data = request.input('data')
        let skills = request.input('skills')

        let profile = await profileModel.find(params.id)

        profile.fullname = data.fullname
        profile.address = data.address
        profile.age = data.age
        profile.email = data.email

        await profile.save()
  
        await profileSkillModel.query().where('profile_id', params.id).delete()
        await profile.profile_skills().createMany(skills) 

        return response.json(profile);
    }

    async deleteProfile({ response, params }) {

        let search = await profileModel.find(params.id)
        await search.delete()

        return response.send(params.id);
    }


    async getProfile({ response, params }) {
                    
        let list = await profileModel.query().with('profile_skills').where('id', params.id).fetch()
        return response.send(list)
    }



}

module.exports = ProfileController
