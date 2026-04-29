// Dados do pedido :)

let nomeCliente = "João Carlos";
let tipoCliente = "premium";

let nomeProduto = "Teclado mecânico";
let precoProduto = 180.00;
let estoque = 10;
let quantidadePedido = 5;

//Tem estoque suficiente?
let estoqueOK = quantidadePedido <= estoque;

if (!estoqueOK) {
    console.log("Pedido recusado - Estoque insuficiente.")
}