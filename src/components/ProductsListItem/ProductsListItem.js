import React from 'react';
import { IconButton, List } from 'react-native-paper';
import PropTypes from 'prop-types';

const ProductsListItem = ({ name, action }) => {
  const { Item, Icon } = List;
  return (
    <Item
      title={name}
      left={() => <Icon icon="shape" />}
      right={() => <IconButton icon="delete" onPress={action} />}
    />
  );
};

export default ProductsListItem;

ProductsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
