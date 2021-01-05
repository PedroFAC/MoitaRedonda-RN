import auth from '@react-native-firebase/auth';
import { Toast } from 'native-base';
import { useState } from 'react';
import useCart from './useCart';

const useFirebaseAuth = () => {
  const { clearCartSignOut } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const firebaseSignUp = async (username, email, password) => {
    try {
      setIsLoading(true);
      await auth().createUserWithEmailAndPassword(email, password);
      await auth().currentUser.updateProfile({ displayName: username });
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger' });
    } finally {
      setIsLoading(false);
    }
  };

  const firebaseSignIn = async (email, password) => {
    try {
      setIsLoading(true);
      await auth().signInWithEmailAndPassword(email, password);
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger' });
    } finally {
      setIsLoading(false);
    }
  };

  const fireBaseSignout = async () => {
    try {
      setIsLoading(true);
      await auth().signOut();
      clearCartSignOut();
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger' });
    } finally {
      setIsLoading(false);
    }
  };
  return { firebaseSignIn, firebaseSignUp, fireBaseSignout, isLoading };
};

export default useFirebaseAuth;
