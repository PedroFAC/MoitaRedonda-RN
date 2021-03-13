import React from 'react';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';
import { theme } from '../sharedComponents/theme';

const LargeButton = ({ children, onPress, icon, disabled }) => (
  <Button
    uppercase={false}
    disabled={disabled}
    onPress={onPress}
    mode="contained"
    icon={icon}
    color={theme.colors.black}
    style={{ borderRadius: 0 }}
    labelStyle={{
      color: 'white',
      fontSize: theme.fonts.heading3.fontSize,
      fontFamily: theme.fonts.heading3.fontFamily,
    }}
  >
    {children}
  </Button>
);

export default LargeButton;

LargeButton.propTypes = {
  children: PropTypes.node,
  onPress: PropTypes.func,
  icon: PropTypes.string,
  disabled: PropTypes.bool,
};

LargeButton.defaultProps = {
  children: null,
  onPress: null,
  icon: null,
  disabled: false,
};
