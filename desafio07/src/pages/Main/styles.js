import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;

  background-color: #191920;
`;

export const ProductList = styled.ScrollView.attrs({
  horizontal: true,
})`
  padding: 20px;
`;

export const Item = styled.View`
  width: 220px;
  height: 358px;

  margin-right: 15px;

  background-color: #fff;
  border-radius: 5px;
`;
