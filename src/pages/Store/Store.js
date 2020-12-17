import React from 'react';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';
import routesEnum from '../../routes/routesConstants';
import {
  Container,
  CustomButton,
} from '../../components/sharedComponents/sharedComponents';

const Store = () => {
  const { navigate } = useNavigation();
  const signout = async () => {
    try {
      await auth().signOut();
      navigate(routesEnum.home);
    } catch (error) {
      ToastAndroid.show(String(error), 5);
    }
  };
  return (
    <Container>
      <CustomButton onPress={() => signout()}>Signout</CustomButton>
    </Container>
  );
};

export default Store;
