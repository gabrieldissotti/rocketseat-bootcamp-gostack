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
    const { amount } = this.props;

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
                <Quantity>{amount[item.id] || 0}</Quantity>
                <Label>ADICIONAR</Label>
              </Button>
            </Item>
          );
        }}
      />
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

export default connect(
  null,
  mapStateToProps
)(Main);
