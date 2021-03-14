import { Image } from 'react-native';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { theme } from '../../components/sharedComponents/theme';

export const CardImage = styled(Image)`
  width: 100%;
  height: 200px;
`;

export const AddToCartButton = styled(Button)`
  display: flex;
  align-items: center;
  border-radius: ${(props) => (props.rounded ? '100px' : '0')};
  background: ${theme.colors.black};
`;
