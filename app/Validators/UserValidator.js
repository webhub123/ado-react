'use strict'

class UserValidator {

    get rules () {
        return {
            fullname: 'required|min:5|max:255',
            address: 'required|min:5|max:255',
        }
    }

    get messages () {
        return {
            'fullname.required': 'Fullname is required',
            'address.required': 'Address is required',
            'fullname.min': 'Fullname should be minimum of 5 characters',
            'address.min': 'Address should be minimum of 5 characters',
        };
    }

    async fails(errorMessages) {
        return this.ctx.response.send(errorMessages)
    }

    async validateAll() {
        return true
    }

}

module.exports = UserValidator