const path = require('path')

module.exports = {
    resolve: {
        alias: {
            //'logger': path.resolve(__dirname, './logger'),
            //Shared: path.resolve(__dirname, 'resources/assets/js/shared'),
            App: path.resolve(__dirname, 'app/'),
            CSS: path.resolve(__dirname, 'public/chat/')
        }
    }
}