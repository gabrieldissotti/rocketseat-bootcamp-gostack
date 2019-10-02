import React from 'react';

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

export default function Cart() {
  return (
    <Container>
      <Card>
        <Item>
          <Details>
            <Image
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/28/COL-3586-128/COL-3586-128_detalhe2.jpg?ims=326x',
              }}
            />
            <Description>
              <Name>Tênis de Caminhada Leve Confortável</Name>
              <Price>R$179,90</Price>
            </Description>
          </Details>
          <Wrap>
            <Amount>3</Amount>
            <SubTotal>R$539,70</SubTotal>
          </Wrap>
        </Item>
        <Item>
          <Details>
            <Image
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-adidas-duramo-lite-2-0-masculino/28/COL-3586-128/COL-3586-128_detalhe2.jpg?ims=326x',
              }}
            />
            <Description>
              <Name>Tênis de Caminhada Leve Confortável</Name>
              <Price>R$179,90</Price>
            </Description>
          </Details>
          <Wrap>
            <Amount>3</Amount>
            <SubTotal>R$539,70</SubTotal>
          </Wrap>
        </Item>
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
