import React from 'react';
import { useCart } from '../../helpers/hooks';
import { CardSection, Paragraph } from '../sharedComponents/sharedComponents';

const CartStatusCard = () => {
  const { totalCost, totalItems } = useCart();
  return (
    <>
      <CardSection>
        <Paragraph>Total de itens: {totalItems}</Paragraph>
      </CardSection>
      <CardSection>
        <Paragraph>Valor total: R$ {totalCost}</Paragraph>
      </CardSection>
    </>
  );
};

export default CartStatusCard;
