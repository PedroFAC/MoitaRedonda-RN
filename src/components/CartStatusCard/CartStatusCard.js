import { Text } from 'native-base';
import React from 'react';
import { useCart } from '../../helpers/hooks';
import { CardSection } from '../sharedComponents/sharedComponents';
import { theme } from '../sharedComponents/theme';

const CartStatusCard = () => {
  const { totalCost, totalItems } = useCart();
  return (
    <>
      <CardSection>
        <Text style={{ fontFamily: theme.fonts.paragraph.fontFamily }}>
          Total de itens: {totalItems}
        </Text>
      </CardSection>
      <CardSection>
        <Text style={{ fontFamily: theme.fonts.paragraph.fontFamily }}>
          Valor total: R$ {totalCost}
        </Text>
      </CardSection>
    </>
  );
};

export default CartStatusCard;
