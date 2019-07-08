'use strict';

const stompit = require('stompit');

const xml2js = require('xml2js');

const importModel = require('../controllers/documentoModel.js');

const SituacaoDocumento = {
    EM_ELABORACAO: 'Em Elaboração',
    PARA_ASSINATURA: 'Para Assinatura',
    ASSINADO: 'Assinado',
    DEVOLVIDO: 'Devolvido'
}

exports.publica_mensagem_active = function (req, res) {
    let documento = new Documento();

    documento.initModel({ id : 1 } );
    documento.setDescricao("Oficio Circular nª 0001/2019 - OUTSPOKEN");
    documento.setNumeroProcessoPeticao("0001/2019");
    documento.setTipoDocumento("Oficio");
    documento.setSetorCriacao("DAS - Departamento de Arquitetura de Software");
    documento.setObservacao("Encaminhar documento para assinatura pelo setor DNE - Departamento Negocial.");
    documento.setUsuarioCriador("valexsander");
    documento.setSituacaoDocumento(SituacaoDocumento.EM_ELABORACAO);
    documento.setDataElaboracao("2019-07-08");

    let xmlBuilder = new xml2js.Builder();
    let objetoEmXml = xmlBuilder.buildObject(documento);

    stompit.connect({ host: 'localhost', port: 61613 }, (err, client) => {
      const frame = client.send({ destination: 'exemplo' });
      frame.write(objetoEmXml);
      frame.end();
      client.disconnect();
    });

    res.json("SUCESSO !!!");
}