import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import routesEnum from '../../routes/routesConstants';
import useCart from './useCart';

const useFirebaseAuth = () => {
  const { navigate } = useNavigation();
  const { clearCartSignOut } = useCart();

  const firebaseSignUp = async (email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      navigate(routesEnum.home);
    } catch (error) {
      ToastAndroid.show(String(error), 5);
    }
  };

  const firebaseSignIn = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigate(routesEnum.store);
    } catch (error) {
      ToastAndroid.show(String(error), 5);
    }
  };

  const fireBaseSignout = async () => {
    try {
      await auth().signOut();
      clearCartSignOut();
      navigate(routesEnum.home);
    } catch (error) {
      ToastAndroid.show(String(error), 5);
    }
  };
  return { firebaseSignIn, firebaseSignUp, fireBaseSignout };
};

export default useFirebaseAuth;
