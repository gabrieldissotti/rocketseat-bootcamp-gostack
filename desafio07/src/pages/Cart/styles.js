import styled from 'styled-components';

export const Container = styled.View`
  padding: 20px;
  flex: 1;

  width: 100%;

  background-color: #191920;
`;

export const Card = styled.View`
  padding: 22px 15px 15px 15px;

  border-radius: 5px;
  background-color: #fff;
`;

export const Item = styled.FlatList`
  margin-bottom: 20px;
`;

export const Description = styled.View`
  margin: 10px 45px auto 10px;

  flex-direction: column;
`;

export const Details = styled.View`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 80px;
  height: 80px;
`;

export const Name = styled.Text``;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const Wrap = styled.View`
  flex-direction: row;
  align-items: center;

  border-radius: 5px;
  background-color: #eee;
  padding: 7px;
`;

export const Amount = styled.Text`
  margin-left: 30px;

  width: 51px;

  padding: 5px 12px;

  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
`;

export const SubTotal = styled.Text`
  position: absolute;
  right: 10px;
  font-size: 16px;
  font-weight: bold;
`;

export const Total = styled.View``;

export const Title = styled.Text`
  color: #999;
  text-align: center;
  font-weight: bold;
  font-family: Roboto;
`;

export const Value = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  font-family: Roboto;
`;

export const BtnFinish = styled.TouchableOpacity`
  width: 100%;

  padding: 13px;

  border-radius: 5px;
  background-color: #7159c1;
`;

export const Label = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
  font-family: Roboto;
  font-weight: bold;
`;
