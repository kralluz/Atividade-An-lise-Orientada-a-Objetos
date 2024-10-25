class Contato {
    constructor(tel1, tel2, cel1, cel2, email) {
      this.tel1 = tel1;
      this.tel2 = tel2;
      this.cel1 = cel1;
      this.cel2 = cel2;
      this.email = email;
    }
  }
  
  class Endereco {
    constructor(cep, estado, cidade, rua, numero, complemento) {
      this.cep = cep;
      this.estado = estado;
      this.cidade = cidade;
      this.rua = rua;
      this.numero = numero;
      this.complemento = complemento;
    }
  }
  

  class Pessoa {
    constructor(codigo, nome, dataNascimento, identidade) {
      this.codigo = codigo;
      this.nome = nome;
      this.dataNascimento = dataNascimento;
      this.identidade = identidade;
    }
  }
  
  class Cliente extends Pessoa {
    constructor(codigo, nome, dataNascimento, identidade, dataCadastro, emAberto) {
      super(codigo, nome, dataNascimento, identidade);
      this.dataCadastro = dataCadastro;
      this.emAberto = emAberto;
    }
  
    emitirExtrato() {

    }
  
    efetuarPagamento() {

    }
  }
  
  class Fornecedor {
    constructor(codFornecedor, razao, nomeFantasia, inscricaoEstadual, cnpj) {
      this.codFornecedor = codFornecedor;
      this.razao = razao;
      this.nomeFantasia = nomeFantasia;
      this.inscricaoEstadual = inscricaoEstadual;
      this.cnpj = cnpj;
    }
  }
  

  class Funcionario extends Pessoa {
    constructor(codigo, nome, dataNascimento, identidade, dataAdmissao, dataRescisao) {
      super(codigo, nome, dataNascimento, identidade);
      this.dataAdmissao = dataAdmissao;
      this.dataRescisao = dataRescisao;
    }
  
    cadastrarCliente(cliente) {

    }
  
    consultarCliente(codigoCliente) {

    }
  
    alterarFornecedor(fornecedor) {

    }
  
    consultarFornecedor(codigoFornecedor) {

    }
  }
  

  class Compra {
    constructor(codCompra, notaFiscal, codProduto, quantidade, codFornecedor, dataCompra) {
      this.codCompra = codCompra;
      this.notaFiscal = notaFiscal;
      this.codProduto = codProduto;
      this.quantidade = quantidade;
      this.codFornecedor = codFornecedor;
      this.dataCompra = dataCompra;
    }
  }
  

  class Produto {
    constructor(codProduto, nome, valor) {
      this.codProduto = codProduto;
      this.nome = nome;
      this.valor = valor;
    }
  }
  

  class Venda {
    constructor(codVenda, codCliente, dataVenda, codProduto, quantidade, precoVenda, subTotal, formaPagamento) {
      this.codVenda = codVenda;
      this.codCliente = codCliente;
      this.dataVenda = dataVenda;
      this.codProduto = codProduto;
      this.quantidade = quantidade;
      this.precoVenda = precoVenda;
      this.subTotal = subTotal;
      this.formaPagamento = formaPagamento;
    }
  }
  
