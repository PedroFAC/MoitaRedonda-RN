import React, { useState } from 'react';
import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import {
  Input,
  Container,
  CustomButton,
} from '../../components/sharedComponents/sharedComponents';
import { ButtonsContainer } from './styles';
import routesEnum from '../../routes/routesConstants';

const Signup = () => {
  const { navigate } = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const signin = async () => {
    try {
      if (password === confirmPassword) {
        await auth().createUserWithEmailAndPassword(email, password);
        navigate(routesEnum.home);
      }
    } catch (error) {
      ToastAndroid.show(String(error), 5);
    }
  };

  return (
    <Container>
      <Input
        mode="outlined"
        label="Email"
        value={email}
        keyboardType="email-address"
        onChangeText={(value) => setEmail(value)}
      />
      <Input
        mode="outlined"
        label="Senha"
        value={password}
        secureTextEntry
        onChangeText={(value) => setPassword(value)}
      />
      <Input
        mode="outlined"
        label="Confirmar Senha"
        value={confirmPassword}
        secureTextEntry
        onChangeText={(value) => setConfirmPassword(value)}
      />
      <ButtonsContainer>
        <CustomButton
          onPress={() => signin()}
          uppercase={false}
          mode="contained"
        >
          Confirmar
        </CustomButton>
      </ButtonsContainer>
    </Container>
  );
};

export default Signup;
