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
  position: relative;
  margin-right: 15px;

  width: 220px;
  height: 358px;
  padding: 10px;

  background-color: #fff;
  border-radius: 5px;
`;

export const Cover = styled.Image`
  width: 200px;
  height: 200px;
`;

export const Legend = styled.Text`
  font-family: Roboto;
  font-size: 16px;
  line-height: 21px;
`;

export const Price = styled.Text`
  margin-top: 5px;

  font-family: Roboto;
  font-size: 21px;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  bottom: 0;
  margin: 10px;
  position: absolute;

  width: 100%;

  overflow: hidden;
  font-size: 14px;
  background: #7159c1;
  align-items: center;
  border-radius: 5px;
  flex-direction: row;
  justify-content: center;
`;

export const Quantity = styled.Text`
  width: 25%;
  height: 100%;
  padding: 13px;

  color: #fff;
  text-align: right;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Label = styled.Text`
  width: 75%;
  padding: 13px;

  color: #fff;
  text-align: center;
  font-weight: bold;
`;
