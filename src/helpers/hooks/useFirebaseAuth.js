import auth from '@react-native-firebase/auth';
import { Toast } from 'native-base';
import useCart from './useCart';

const useFirebaseAuth = () => {
  const { clearCartSignOut } = useCart();

  const firebaseSignUp = async (username, email, password) => {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      await auth().currentUser.updateProfile({ displayName: username });
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger' });
    }
  };

  const firebaseSignIn = async (email, password) => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger' });
    }
  };

  const fireBaseSignout = async () => {
    try {
      await auth().signOut();
      clearCartSignOut();
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger' });
    }
  };
  return { firebaseSignIn, firebaseSignUp, fireBaseSignout };
};

export default useFirebaseAuth;
