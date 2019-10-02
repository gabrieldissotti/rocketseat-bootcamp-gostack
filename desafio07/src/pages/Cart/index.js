import React from 'react';
import { useSelector } from 'react-redux';

import { formatPrice } from '../../util/format';

import {
  Card,
  Item,
  Name,
  Wrap,
  Total,
  Image,
  Title,
  Value,
  Label,
  Price,
  Amount,
  Details,
  SubTotal,
  BtnFinish,
  Container,
  Description,
} from './styles';

function Cart() {
  const total = useSelector(state => formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ))

  const cart = useSelector(state => state.cart.map(
    product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }),
    0
  ))


  return (
    <Container>
      <Card>
        <Item
          data={cart}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({ item }) => {
            return (
              <>
                <Details>
                  <Image
                    source={{
                      uri: item.image,
                    }}
                  />
                  <Description>
                    <Name>{item.title}</Name>
                    <Price>{item.priceFormatted}</Price>
                  </Description>
                </Details>
                <Wrap>
                  <Amount>3</Amount>
                  <SubTotal>{item.subtotal}</SubTotal>
                </Wrap>
              </>
            );
          }}
        />
        <Total>
          <Title>TOTAL</Title>
          <Value>{total}</Value>
        </Total>
        <BtnFinish>
          <Label>FINALIZAR PEDIDO</Label>
        </BtnFinish>
      </Card>
    </Container>
  );
}
