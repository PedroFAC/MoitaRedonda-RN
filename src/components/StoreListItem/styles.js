import { Text, View } from 'native-base';
import styled from 'styled-components/native';
import { Button } from 'react-native-paper';
import { ImageBackground } from 'react-native';
import { theme } from '../sharedComponents/theme';

export const ImageContainer = styled(ImageBackground)`
  display: flex;
  flex: 1;
  height: 200px;
`;

export const ImageButton = styled(Button)`
  display: flex;
  opacity: 0.8;
  align-items: center;
  border-radius: ${(props) => (props.rounded ? '100px' : '0')};
  background: ${theme.colors.black};
`;

export const ButtonText = styled(Text)`
  color: ${theme.colors.white};
  font-family: ${theme.fonts.paragraph.fontFamily};
`;

export const OwnerText = styled(Text)`
  font-family: ${theme.fonts.paragraph.fontFamily};
  font-weight: ${(props) => (props.bold ? 'bold' : 'normal')};
`;

export const CartButtonContainer = styled(View)`
  flex: 1;
  align-self: flex-end;
  padding: 10px;
`;

export const DetailsButtonContainer = styled(View)`
  flex: 1;
  align-self: center;
  justify-content: flex-end;
  width: 100%;
`;

export const TitleContainer = styled(View)`
  flex: 1;
  align-items: flex-start;
`;
