'use strict';

module.exports = function(app) {
    var activeController = require('../controllers/documentoController.js');

    app.route('/publica-asctive')
        .get(activeController.publica_mensagem_active);
};