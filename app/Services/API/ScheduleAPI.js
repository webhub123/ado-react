'use strict'

const axios = require('axios')
const Config = use('Config')

class ScheduleAPI {
    constructor() { 
        this.url = Config.get('api.url')
    }
    async saveSchedule(data) {
 
        let apiLink = this.url + '/dev/schedule/add-schedule'

        return data//await this._axiosFetch(apiLink, data)
    }

    async fetchSchedule(data) {
        let apiLink = this.url + '/dev/schedule/fetch-schedule'

        return await this._axiosFetch(apiLink, data)
    }

    async _axiosFetch(apiLink, data) {
        let api_data = ''

        await axios.post(apiLink, data)
            .then(({data})=> {
                api_data = data
            })
            .catch((err)=>{
                api_data = err
            })

        return api_data
    }
}

module.exports = new ScheduleAPI()