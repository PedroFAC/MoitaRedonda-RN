import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export const CustomButton = styled(Button)`
  margin: 10px 0;
`;

export const Container = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const Input = styled(TextInput)`
  margin: 16px 0;
  width: 80%;
  align-self: center;
`;
