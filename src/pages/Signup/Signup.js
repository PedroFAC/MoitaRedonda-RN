import React from 'react';
import { Text } from 'react-native';
import { Formik } from 'formik';
import { ScrollView } from 'react-native-gesture-handler';
import {
  Input,
  Wrapper,
  CustomButton,
  ButtonsContainer,
} from '../../components/sharedComponents/sharedComponents';
import { useFirebaseAuth } from '../../helpers/hooks';
import { userSchema } from '../../helpers/schemas/userSchema';

const Signup = () => {
  const { firebaseSignUp } = useFirebaseAuth();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
        username: '',
      }}
      validationSchema={userSchema}
      onSubmit={({ username, email, password }) =>
        firebaseSignUp(username, email, password)
      }
    >
      {({ handleChange, values, handleSubmit, errors }) => (
        <ScrollView>
          <Wrapper>
            <Input
              mode="outlined"
              label="Nome de usuário"
              value={values.username}
              onChangeText={handleChange('username')}
              error={errors.username}
            />
            <Text>{errors.username}</Text>
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
          </Wrapper>
        </ScrollView>
      )}
    </Formik>
  );
};

export default Signup;
