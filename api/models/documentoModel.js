'use strict';

class Documento {

    constructor() {
        this._id = null;
        this._descricao = null;
        this._tipoDocumento = null;
        this._numeroProcessoPeticao = null;
        this._setorAssinatura = null;
        this._setorCriacao = null;
        this._observacao = null;
        this._usuarioCriador = null;
        this._situacaoDocumento = null;
        this._dataElaboracao = null;
        this._dataAssinatura = null;
    }

    initModel (obj) {
        this._id = obj.id;
    }

    getId() { return this._id; }

    setId(value) { this._id = value; }

    getDescricao() { return this._descricao; }

    setDescricao(value) { this._descricao = value; }

    getTipoDocumento() { return this._tipoDocumento; }

    setTipoDocumento(value) { this._tipoDocumento = value; }

    getNumeroProcessoPeticao() { return this._numeroProcessoPeticao; }

    setNumeroProcessoPeticao(value) { this._numeroProcessoPeticao = value; }

    getSetorAssinatura() { return this._setorAssinatura; }

    setSetorAssinatura(value) { this._setorAssinatura = value; }

    getSetorCriacao() { return this._setorCriacao; }

    setSetorCriacao(value) { this._setorCriacao = value; }

    getObservacao() { return this._observacao; }

    setObservacao(value) { this._observacao = value; }

    getUsuarioCriador() { return this._usuarioCriador; }

    setUsuarioCriador(value) { this._usuarioCriador = value; }

    getSituacaoDocumento() { return this._situacaoDocumento; }

    setSituacaoDocumento(value) { this._situacaoDocumento = value; }

    getDataElaboracao() { return this._dataElaboracao; }

    setDataElaboracao(value) { this._dataElaboracao = value; }

    getDataAssinatura() { return this._dataAssinatura; }

    setDataAssinatura(value) { this._dataAssinatura = value; }
}
