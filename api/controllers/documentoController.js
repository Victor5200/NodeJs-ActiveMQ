'use strict';

const stompit = require('stompit');

const xml2js = require('xml2js');


exports.publica_mensagem_active = function (req, res) {

    let obj = { name : 'texte', dia : '12'} ;

    var builder = new xml2js.Builder();
    var xml = builder.buildObject(obj);

    stompit.connect({ host: 'localhost', port: 61613 }, (err, client) => {
      const frame = client.send({ destination: 'exemplo' });
      frame.write(xml);
      frame.end();
      client.disconnect();
    });

    res.json("SUCESSO !!!");
}