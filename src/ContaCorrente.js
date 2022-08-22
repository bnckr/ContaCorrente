"use strict";
exports.__esModule = true;
exports.ContaCorrente = void 0;
var ContaCorrente = /** @class */ (function () {
    function ContaCorrente(agencia, _saldo) {
        this.agencia = agencia;
        this._saldo = _saldo;
    }
    ContaCorrente.prototype.sacar = function (valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    };
    ContaCorrente.prototype.depositar = function (valor) {
        if (valor > 0) {
            this._saldo += valor;
            return valor;
        }
    };
    ContaCorrente.prototype.consultar = function (_saldo) {
        return this._saldo;
    };
    return ContaCorrente;
}());
exports.ContaCorrente = ContaCorrente;
