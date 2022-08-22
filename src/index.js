"use strict";
exports.__esModule = true;
var ContaCorrente_1 = require("./ContaCorrente");
//Criar conta corrente
var conta = new ContaCorrente_1.ContaCorrente(1212, 500);
//Realizando as funções depositar e sacar
conta.depositar(50);
conta.sacar(10);
//Constante extrato que armazena os dados na array
var extrato = [];
extrato.push({
    tipo: "Deposito",
    valor: (500.0).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    }),
    data: "2022-08-16"
}, {
    tipo: "Deposito",
    valor: (50.0).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    }),
    data: "2022-08-15"
}, {
    tipo: "Saque",
    valor: (10.0).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
    }),
    data: "2022-08-11"
});
//Constante resultado e exibe o filtro do extrato por data informada
var resultado = extrato.filter(function (obj) {
    return obj.data === "2022-08-11";
});
console.log(extrato);
console.log("Total: ".concat(conta._saldo.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL"
})));
console.log(resultado);
