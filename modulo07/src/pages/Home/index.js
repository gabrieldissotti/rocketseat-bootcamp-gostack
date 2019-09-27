import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-quest-2-masculino/26/HZM-1743-026/HZM-1743-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>
          Tênis muito legal com titulo mutio grande que quebra varias linhas
        </strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-quest-2-masculino/26/HZM-1743-026/HZM-1743-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-quest-2-masculino/26/HZM-1743-026/HZM-1743-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-quest-2-masculino/26/HZM-1743-026/HZM-1743-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO </span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-quest-2-masculino/26/HZM-1743-026/HZM-1743-026_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO </span>
        </button>
      </li>
    </ProductList>
  );
}
