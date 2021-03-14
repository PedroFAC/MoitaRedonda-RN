import { Text } from 'native-base';
import styled from 'styled-components';
import { theme } from '../../components/sharedComponents/theme';

export const ProductName = styled(Text)`
  font-family: ${theme.fonts.heading3.fontFamily};
  font-size: ${theme.fonts.heading3.fontSize}px;
`;
