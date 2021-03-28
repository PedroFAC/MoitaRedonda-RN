import { Button, TextInput } from 'react-native-paper';
import {
  Card,
  CardItem,
  Container as NativeBaseContainer,
  H3,
  Text,
} from 'native-base';
import styled from 'styled-components/native';
import { theme } from './theme';

export const CustomButton = styled(Button)`
  margin: 10px 0;
  background: ${theme.colors.black};
`;

export const Container = styled(NativeBaseContainer)`
  background: ${theme.colors.beige};
`;

export const Wrapper = styled(NativeBaseContainer)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background: ${theme.colors.beige};
`;

export const Input = styled(TextInput)`
  margin: 16px 0;
  width: 80%;
  align-self: center;
  background: ${theme.colors.beige};
`;

export const ButtonsContainer = styled.View`
  display: flex;
  justify-content: center;
`;

export const CardButton = styled(Button)`
  width: 100%;
`;

export const CardContainer = styled(Card)`
  align-self: center;
  align-items: center;
  background: ${theme.colors.beige};
`;

export const CardSection = styled(CardItem)`
  background: ${theme.colors.beige};
`;

export const CardHeader = styled(H3)`
  font-family: ${theme.fonts.heading2.fontFamily};
  font-size: ${theme.fonts.heading2.fontSize}px;
  color: ${theme.colors.red};
`;

export const Price = styled(Text)`
  font-family: ${theme.fonts.heading2.fontFamily};
  font-size: ${theme.fonts.heading2.fontSize}px;
  color: ${theme.colors.brown};
`;

export const Paragraph = styled(Text)`
  font-family: ${theme.fonts.paragraph.fontFamily};
  font-size: ${theme.fonts.paragraph.fontSize}px;
  color: ${theme.colors.black};
`;

export const ButtonText = styled(Text)`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.paragraph.fontFamily};
`;

export const OwnerText = styled(Text)`
  font-family: ${theme.fonts.paragraph.fontFamily};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const SmallPrice = styled(Text)`
  font-family: ${theme.fonts.heading3.fontFamily};
  font-size: ${theme.fonts.heading3.fontSize}px;
  color: ${theme.colors.brown};
`;

export const ErrorText = styled(Text)`
  text-align: center;
  font-family: ${theme.fonts.paragraph.fontFamily};
  font-size: ${theme.fonts.paragraph.fontSize}px;
  color: ${theme.colors.red};
`;
