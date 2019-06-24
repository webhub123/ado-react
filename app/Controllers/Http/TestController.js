'use strict'

const profileModel = use('App/Models/Profile')
const Bill = use('App/Models/Bill')

class TestController {

    async getProfile({ request, response, params}) {

        let profile = await profileModel.find(params.id)

        return response.send(profile)
    }

    async addBill({request, response}) {

        const { name, occurance } = request.only(['name', 'occurance'])

        const newBill = new Bill()

        newBill.name = name
        newBill.occurance = occurance
        let result = await newBill.save()

        if(result)
            return response.send()

        return response.status(500).send()

    }
}

module.exports = TestController