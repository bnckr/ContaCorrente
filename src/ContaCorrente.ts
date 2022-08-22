
type Operacao = {
  data: Date;
  operacao: string,
  valor: number;
};

export class ContaCorrente {
  agencia: string;
  _saldo: number;
  historico: Operacao[];

  constructor(agencia: string, _saldo: number) {
    this.agencia = agencia;
    this._saldo = _saldo;
    this.historico = [];
  }

  sacar(valor: number, data: Date): number {
    if (valor < 0) {
      return 0.0;
    }
    
    if (this._saldo < valor) {
      return 0.0;
    }
    
    this._saldo -= valor;
    this.historico.push(data);
    return valor;
  }

  depositar(valor: number, data:Date): number {
    if (valor > 0) {
      this._saldo += valor;
      this.historico.push(data);
      return valor;
    }

    return 0.0;
  }

  consultar() {
    return this._saldo;
  }

  exibirExtrato(): void {
    this.historico.forEach((data)  => {
      console.log(data)
    });
  }
}


const conta = new ContaCorrente("0001", 0.0);

conta.depositar(100, new Date(2022, 1, 13));
conta.depositar(100, new Date(2022, 1, 14));
conta.sacar(50, new Date(2022, 1, 14));
console.log(conta.consultar());
conta.exibirExtrato();





