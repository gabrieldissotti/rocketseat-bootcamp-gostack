import React, { Component } from 'react';
import { connect } from 'react-redux';

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

  handleAddToCart = product => {
    // const { navigation } = this.props;
    const { dispatch } = this.props;

    dispatch({
      type: 'ADD_TO_CART',
      product,
    });

    // navigation.navigate('Cart');
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
              <Button onPress={() => this.handleAddToCart(item)}>
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

export default connect()(Main);
