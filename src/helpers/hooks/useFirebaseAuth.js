import auth from '@react-native-firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import routesEnum from '../../routes/routesConstants';

const useFirebaseAuth = () => {
  const { navigate } = useNavigation();
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
      navigate(routesEnum.productsAdmin);
    } catch (error) {
      ToastAndroid.show(String(error), 5);
    }
  };

  const fireBaseSignout = async () => {
    try {
      await auth().signOut();
      navigate(routesEnum.home);
    } catch (error) {
      ToastAndroid.show(String(error), 5);
    }
  };
  return { firebaseSignIn, firebaseSignUp, fireBaseSignout };
};

export default useFirebaseAuth;
