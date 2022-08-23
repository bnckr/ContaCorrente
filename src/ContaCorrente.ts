type Operacao = {
  data: Date;
  operacao: "Depósito" | "Saque";
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
    this.historico.push({ data: data, operacao: "Saque", valor: valor });
    return valor;
  }

  depositar(valor: number, data: Date): number {
    if (valor < 0) {
      return 0.0;
    }

    this._saldo += valor;
    this.historico.push({
      data: data,
      operacao: "Depósito",
      valor: valor,
    });
    return valor;
  }

  consultar() {
    return this._saldo.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

  //Exibir em formato de extrato
  exibirExtrato(): void {
    this.historico.forEach((data) => {
      console.log(data);
    });
  }

  //Exibir em formato de extrato por periodo de tempo
  exibirExtratoPorData(inicio: Date, fim: Date): void {
    //Implementar
    const resultado = this.historico.filter(
      (datas) => datas.data >= inicio && datas.data < fim
    );
    console.log(resultado);
  }
}

const conta = new ContaCorrente("0001", 0.0);

conta.depositar(10, new Date(2022, 1, 13));
conta.depositar(102, new Date(2022, 1, 14));
conta.sacar(42, new Date(2022, 1, 14));
conta.depositar(100, new Date(2022, 1, 15));
conta.depositar(72, new Date(2022, 1, 15));
conta.sacar(50, new Date(2022, 1, 15));
conta.exibirExtrato();
conta.exibirExtratoPorData(
  new Date("2022-02-15T00:00:00.000Z"),
  new Date("2022-02-16T00:00:00.000Z")
);
console.log(conta.consultar());
