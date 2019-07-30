'use strict'

class TranslationController {

    async index({ antl, response }) {

        let translationData = {
            layout: this._getLayoutTranslation(antl),
        }

        let translations = 'translations = ' + JSON.stringify(translationData) + ';'
        response.header('Content-type', 'text/javascript')
        response.send(translations)
    }

    _getLayoutTranslation(Antl) {

        let buttons = Antl.get('layout.buttons')

        return {
            firstname: Antl.get('layout.firstname'),
            middlename: Antl.get('layout.middlename'),
            lastname: Antl.get('layout.lastname'),
            address: Antl.get('layout.address'),
            zip: Antl.get('layout.zip'),
            buttons: buttons,
        }
    }

}

module.exports = TranslationController
