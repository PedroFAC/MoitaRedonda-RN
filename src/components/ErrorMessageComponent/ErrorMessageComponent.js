import { H3, Icon } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { Wrapper } from '../sharedComponents/sharedComponents';
import { theme } from '../sharedComponents/theme';

const ErrorMessageComponent = ({ message }) => (
  <Wrapper>
    <Icon name="alert" />
    <H3
      style={{
        textAlign: 'center',
        fontFamily: theme.fonts.heading3.fontFamily,
      }}
    >
      {message}
    </H3>
  </Wrapper>
);
export default ErrorMessageComponent;

ErrorMessageComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
