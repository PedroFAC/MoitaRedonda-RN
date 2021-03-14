import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import { Image, Text } from 'react-native';
import { useFirebaseAuth } from '../../helpers/hooks';
import {
  Input,
  Wrapper,
  CustomButton,
  ButtonsContainer,
} from '../../components/sharedComponents/sharedComponents';
import routesEnum from '../../routes/routesConstants';
import { loginSchema } from '../../helpers/schemas/loginSchema';
import { logo } from '../../assets';

const Home = () => {
  const { navigate } = useNavigation();
  const { firebaseSignIn, isLoading } = useFirebaseAuth();
  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginSchema}
      onSubmit={({ email, password }) => firebaseSignIn(email, password)}
    >
      {({ values, handleChange, handleSubmit, errors }) => (
        <Wrapper>
          <Image source={logo} style={{ height: 200, width: 200 }} />
          <Input
            mode="outlined"
            label="Email"
            value={values.email}
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            disabled={isLoading}
          />
          <Text>{errors.email}</Text>

          <Input
            mode="outlined"
            label="Senha"
            value={values.password}
            secureTextEntry
            onChangeText={handleChange('password')}
            disabled={isLoading}
          />
          <Text>{errors.password}</Text>

          <ButtonsContainer>
            <CustomButton
              onPress={handleSubmit}
              uppercase={false}
              mode="contained"
              disabled={isLoading}
            >
              Entrar
            </CustomButton>
            <CustomButton
              uppercase={false}
              mode="contained"
              onPress={() => navigate(routesEnum.signup)}
              disabled={isLoading}
            >
              Cadastre-se
            </CustomButton>
          </ButtonsContainer>
        </Wrapper>
      )}
    </Formik>
  );
};

export default Home;
