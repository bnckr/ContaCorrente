import { ContaCorrente } from "./ContaCorrente";

//Criar conta corrente
let conta = new ContaCorrente(1212, 500);

//Realizando as funções depositar e sacar
conta.depositar(50);
conta.sacar(10);

//Constante extrato que armazena os dados na array
const extrato: { tipo: string; valor: any; data: any }[] = [];

extrato.push(
  {
    tipo: "Deposito",
    valor: (500.0).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
    data: "2022-08-16",
  },
  {
    tipo: "Deposito",
    valor: (50.0).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
    data: "2022-08-15",
  },
  {
    tipo: "Saque",
    valor: (10.0).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    }),
    data: "2022-08-11",
  }
);

//Constante resultado exibe o filtro do extrato por data informada
const resultado = extrato.filter((obj) => {
  return obj.data === "2022-08-11";
});

console.log(extrato);

console.log(
  `Total: ${conta._saldo.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  })}`
);

console.log(resultado);
