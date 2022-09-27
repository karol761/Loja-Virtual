import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {
  produtos: IProduto[] = produtos;

  constructor() { }

  getall() {
    return this.produtos;
  }

  getOne(produtoid: number) {
    return this.produtos.find(produto => produto.id === produtoid);
  }
}
