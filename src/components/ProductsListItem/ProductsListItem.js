import React from 'react';
import { IconButton, List } from 'react-native-paper';
import PropTypes from 'prop-types';

const ProductsListItem = ({ name, deleteAction, editAction }) => {
  const { Item } = List;
  return (
    <Item
      title={name}
      left={() => <IconButton icon="shape" onPress={editAction} />}
      right={() => <IconButton icon="delete" onPress={deleteAction} />}
    />
  );
};

export default ProductsListItem;

ProductsListItem.propTypes = {
  name: PropTypes.string.isRequired,
  deleteAction: PropTypes.func.isRequired,
  editAction: PropTypes.func.isRequired,
};
