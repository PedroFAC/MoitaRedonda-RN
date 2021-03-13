import { ListItem, Text, Thumbnail, View } from 'native-base';
import styled from 'styled-components';
import { theme } from '../sharedComponents/theme';

export const ProductImage = styled(Thumbnail)`
  border-radius: 5px;
  width: 100px;
  height: 100px;
`;

export const ProductHeader = styled(Text)`
  font-family: ${theme.fonts.heading3.fontFamily};
  font-size: ${theme.fonts.heading3.fontSize};
  color: ${theme.colors.red};
`;

export const SmallPrice = styled(Text)`
  font-family: ${theme.fonts.heading3.fontFamily};
  font-size: ${theme.fonts.heading3.fontSize};
  color: ${theme.colors.brown};
`;

export const Product = styled(ListItem)`
  background-color: ${theme.colors.beige};
`;

export const SingleContainer = styled(View)`
  flex: 1;
`;

export const VerticalContainer = styled(View)`
  flex-direction: column;
  flex: 2;
`;

export const MultiContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
