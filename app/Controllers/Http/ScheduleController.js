'use strict'

const scheduleAPI = require('../../Services/API/ScheduleAPI')
const XLSX = require('xlsx')
const Profile = use('App/Models/Profile')
const Helpers = use('Helpers')
const fs = require('fs')
const Mail = use('Mail')
const Env = use('Env')

class ScheduleController {


    async saveSchedule({request, response}) {
        let requestData = request.all()
        return response.send(await scheduleAPI.saveSchedule(requestData))
    }


    async getSchedule({request, response}) {
        let fetchedData = {
            name : 'echan',
            phone_number : '09871233221',
            date : '2019-05-22',
            from : '10:00',
            to : '11:10',
            memo : 'Sample memo'
        }
        return response.json(fetchedData)
    }

    async uploadUsers({request, response}) {
        let uploadedFile = request.file('uploadedFile')
        
        try {

            let data = await this.readFileAndGetData(uploadedFile)
            await this.saveUsers(data)
            await this.sendEmail(data)
            return response.send(data)
        } catch (err) {
            return response.send(err.message)
        }

    }

    async sendEmail(data) {
        return await Mail.send('email.email-template', {
            data
        }, (message) => {
            message
                .from(Env.get('MAIL_USERNAME'), Env.get('MAIL_SENDER_NAME'))
                .to('mabilin.christian@gmail.com', 'adasd')
        })
    }

    async saveUsers(data) {

        for(let items of data) {
            let users = {
                
                fullname :items.fullname,
                age :items.age,
                email :items.email,
                address :items.address,
            }
            await Profile.create(users)
        }

        return true
    }

    async readFileAndGetData(uploadedFile) {
        let fileExtention = uploadedFile.extname
        let fileName = uploadedFile.clientName + '-' + Date.now() + '.' + fileExtention

        await uploadedFile.move(Helpers.tmpPath(), {name: fileName})

        let workBook = XLSX.readFile(Helpers.tmpPath() + '/' + fileName)
        let workSheet = workBook.Sheets[workBook.SheetNames[0]]
        let data = XLSX.utils.sheet_to_json(workSheet)

        fs.unlink(Helpers.tmpPath() + '/' + fileName)
        return data
    }

}

module.exports = ScheduleController