import { Button, TextInput } from 'react-native-paper';
import { Container } from 'native-base';
import styled from 'styled-components/native';

export const CustomButton = styled(Button)`
  margin: 10px 0;
`;

export const Wrapper = styled(Container)`
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

export const ButtonsContainer = styled.View`
  display: flex;
  justify-content: center;
`;

export const CardButton = styled(Button)`
  width: 100%;
`;
