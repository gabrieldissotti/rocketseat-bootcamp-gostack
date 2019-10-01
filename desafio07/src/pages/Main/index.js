import React, { Component } from 'react';

import {
  Container,
  ProductList,
  Item,
  Cover,
  Legend,
  Price,
  Quantity,
  Button,
  Label,
} from './styles';

class Main extends Component {
  state = {};

  handleAddToCart = () => {
    const { navigation } = this.props;

    navigation.navigate('Cart');
  };

  render() {
    return (
      <Container>
        <ProductList>
          <Item>
            <Cover
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/28/COL-3586-128/COL-3586-128_detalhe2.jpg?ims=326x',
              }}
            />
            <Legend>Tênis de Caminhada Leve Confortável</Legend>
            <Price>R$179,90</Price>
            <Button onPress={this.handleAddToCart}>
              <Quantity>1</Quantity>
              <Label>ADICIONAR</Label>
            </Button>
          </Item>
          <Item>
            <Cover
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg?ims=326x',
              }}
            />
            <Legend>Tênis de Caminhada Leve Confortável</Legend>
            <Price>R$179,90</Price>
            <Button onPress={this.handleAddToCart}>
              <Quantity>1</Quantity>
              <Label>ADICIONAR</Label>
            </Button>
          </Item>
          <Item>
            <Cover
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/30/D12-9119-130/D12-9119-130_detalhe2.jpg?ims=326x',
              }}
            />
            <Legend>Tênis de Caminhada Leve Confortável</Legend>
            <Price>R$179,90</Price>
            <Button onPress={this.handleAddToCart}>
              <Quantity>1</Quantity>
              <Label>ADICIONAR</Label>
            </Button>
          </Item>
        </ProductList>
      </Container>
    );
  }
}

export default Main;
