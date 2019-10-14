import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

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

export default function Main() {
  const [products, setProducts] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {})
  );

  const dispatch = useDispatch();

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
    dispatch(CartActions.addToCartRequest(id));
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
