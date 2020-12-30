import { CardItem, Text } from 'native-base';
import React from 'react';
import { useCart } from '../../helpers/hooks';

const CartStatusCard = () => {
  const { totalCost, totalItems } = useCart();
  return (
    <>
      <CardItem>
        <Text>Total de itens: {totalItems}</Text>
      </CardItem>
      <CardItem>
        <Text>Valor total: R$ {totalCost}</Text>
      </CardItem>
    </>
  );
};

export default CartStatusCard;
