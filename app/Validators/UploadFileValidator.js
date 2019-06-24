'use strict'

class UploadFileValidator {

    get rules () {
        return {
            uploadedFile: 'file|file_ext:xls,xlsx|file_size:2mb'
        }
    }

    get messages () {
        return {
            'uploadedFile.file': 'Not a file format',
            'uploadedFile.file_ext': 'allowed file is excel file xls. or xlsx.',
            'uploadedFile.file_size': 'the maximum file size is 2mb',
        };
    }

    async fails(errorMessages) {
        return this.ctx.response.send(errorMessages)
    }

}

module.exports = UploadFileValidator