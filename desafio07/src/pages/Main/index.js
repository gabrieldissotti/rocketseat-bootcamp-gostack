import React, { Component } from 'react';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import {
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
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddToCart = () => {
    const { navigation } = this.props;

    navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;

    return (
      <ProductList
        data={products}
        keyExtractor={item => item.id}
        horizontal
        renderItem={({ item }) => {
          return (
            <Item>
              <Cover
                source={{
                  uri: item.image,
                }}
              />
              <Legend>{item.title}</Legend>
              <Price>{item.priceFormatted}</Price>
              <Button onPress={this.handleAddToCart}>
                <Quantity>1</Quantity>
                <Label>ADICIONAR</Label>
              </Button>
            </Item>
          );
        }}
      />
    );
  }
}

export default Main;
