// Importando classes (se estiver usando módulos)
import { Cliente, Fornecedor, Produto, Venda } from './classes.js';

// Criando uma instância de Cliente
const cliente1 = new Cliente(1, 'João Silva', '1990-05-15', 'MG123456', '2024-04-01', true);

// Criando uma instância de Produto
const produto1 = new Produto(101, 'Laptop', 3500.00);

// Criando uma instância de Venda
const venda1 = new Venda(5001, cliente1.codigo, '2024-10-24', produto1.codProduto, 2, produto1.valor, produto1.valor * 2, 'Cartão de Crédito');

console.log(venda1);
