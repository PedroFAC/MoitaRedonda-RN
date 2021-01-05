import { H3, Icon } from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import { Wrapper } from '../sharedComponents/sharedComponents';

const ErrorMessageComponent = ({ message }) => (
  <Wrapper>
    <Icon name="alert" />
    <H3 style={{ textAlign: 'center' }}>{message}</H3>
  </Wrapper>
);
export default ErrorMessageComponent;

ErrorMessageComponent.propTypes = {
  message: PropTypes.string.isRequired,
};
