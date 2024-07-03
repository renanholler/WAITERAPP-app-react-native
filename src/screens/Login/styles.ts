import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #fff;
`;

export const Input = styled.TextInput`
  width: 100%;
  padding: 16px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 16px;
  color: #fff;
  background: #D73035;
  border-radius: 8px;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
`;
