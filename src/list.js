function Produto(nome, preco, comprado) {
  this.nome = nome;
  this.preco = preco;
  this.comprado = comprado;
}
export class Lista {
  constructor(lista) {
    this.list = lista;
  }
  inserir(nome, preco, comprado) {
    let produto = new Produto(nome, preco, comprado);
    this.list.push(produto);
  }
  remover(nome) {
    this.list = this.list.filter((objeto) => objeto.nome !== nome);
  }
  marcar(nome) {
    for (elemento of this.list) {
      if (elemento.nome === nome) {
        elemento.comprado = true;
      }
    }
  }
  desmarcar(nome) {
    for (elemento of this.list) {
      if (elemento.nome === nome) {
        elemento.comprado = true;
      }
    }
  }
  listar() {
    return this.list;
  }
}
