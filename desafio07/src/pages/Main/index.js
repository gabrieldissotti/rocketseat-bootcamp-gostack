import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

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

  handleAddToCart = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
    // const { navigation } = this.props;
    // navigation.navigate('Cart');
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList
        data={products}
        keyExtractor={item => String(item.id)}
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
              <Button onPress={() => this.handleAddToCart(item.id)}>
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

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
