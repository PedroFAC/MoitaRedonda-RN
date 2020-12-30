import React from 'react';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

// import { Container } from './styles';

const LargeButton = ({ children, onPress, icon, color, disabled }) => (
  <Button
    uppercase={false}
    disabled={disabled}
    onPress={onPress}
    mode="contained"
    icon={icon}
    color={color}
    labelStyle={{ color: 'white', fontSize: 18 }}
  >
    {children}
  </Button>
);

export default LargeButton;

LargeButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  icon: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
};

LargeButton.defaultProps = {
  children: null,
  onPress: null,
  icon: null,
  color: null,
  disabled: false,
};
