import React from 'react';
import { connect } from 'react-redux';

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

function Cart({ cart }) {
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
                  <SubTotal>R$539,70</SubTotal>
                </Wrap>
              </>
            );
          }}
        />
        <Total>
          <Title>TOTAL</Title>
          <Value>R$ 1619,10</Value>
        </Total>
        <BtnFinish>
          <Label>FINALIZAR PEDIDO</Label>
        </BtnFinish>
      </Card>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
