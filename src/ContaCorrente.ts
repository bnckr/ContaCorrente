export class ContaCorrente {
  agencia: number;
  _saldo: number;

  constructor(agencia: number, _saldo: number) {
    this.agencia = agencia;
    this._saldo = _saldo;
  }

  sacar(valor: number) {
    if (this._saldo >= valor) {
      this._saldo -= valor;
      return valor;
    }
  }

  depositar(valor: number) {
    if (valor > 0) {
      this._saldo += valor;
      return valor;
    }
  }

  consultar(_saldo: number) {
    return this._saldo;
  }
}

