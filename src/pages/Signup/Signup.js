import React from 'react';
import { Text } from 'react-native';
import { Formik } from 'formik';
import {
  Input,
  Container,
  CustomButton,
  ButtonsContainer,
} from '../../components/sharedComponents/sharedComponents';
import { useFirebaseAuth } from '../../helpers/hooks';
import { userSchema } from '../../helpers/schemas/userSchema';

const Signup = () => {
  const { firebaseSignUp } = useFirebaseAuth();

  return (
    <Formik
      initialValues={{ email: '', password: '', confirmPassword: '' }}
      validationSchema={userSchema}
      onSubmit={({ email, password }) => firebaseSignUp(email, password)}
    >
      {({ handleChange, values, handleSubmit, errors }) => (
        <Container>
          <Input
            mode="outlined"
            label="Email"
            value={values.email}
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            error={errors.email}
          />
          <Text>{errors.email}</Text>
          <Input
            mode="outlined"
            label="Senha"
            value={values.password}
            secureTextEntry
            onChangeText={handleChange('password')}
            error={errors.password}
          />
          <Text>{errors.password}</Text>

          <Input
            mode="outlined"
            label="Confirmar Senha"
            value={values.confirmPassword}
            secureTextEntry
            onChangeText={handleChange('confirmPassword')}
            error={errors.confirmPassword}
          />
          <Text>{errors.confirmPassword}</Text>

          <ButtonsContainer>
            <CustomButton
              onPress={handleSubmit}
              uppercase={false}
              mode="contained"
            >
              Confirmar
            </CustomButton>
          </ButtonsContainer>
        </Container>
      )}
    </Formik>
  );
};

export default Signup;
