'use strict';

module.exports = function(app) {
    let activeController = require('../controllers/documentoController.js');
    app.route('/publica-active').get(activeController.publica_mensagem_active);
};