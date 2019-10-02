import React, { useState, useEffect } from 'react';
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

function Main({ amount, addToCartRequest }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');
      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddToCart(id) {
    addToCartRequest(id);
  }

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
            <Button onPress={() => handleAddToCart(item.id)}>
              <Quantity>{amount[item.id] || 0}</Quantity>
              <Label>ADICIONAR</Label>
            </Button>
          </Item>
        );
      }}
    />
  );
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
