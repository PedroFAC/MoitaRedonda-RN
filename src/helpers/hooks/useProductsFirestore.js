import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { ToastAndroid } from 'react-native';
import routesEnum from '../../routes/routesConstants';

const useProductsFirestore = () => {
  const { navigate } = useNavigation();

  const addProduct = async ({ name, description, price, owner }) => {
    try {
      await firestore().collection('Products').add({
        name,
        description,
        price,
        owner,
        createdAt: firestore.FieldValue.serverTimestamp(),
        updatedAt: firestore.FieldValue.serverTimestamp(),
      });
      ToastAndroid.show('Produto adicionado', 10);
      navigate(routesEnum.productsAdmin);
    } catch (error) {
      ToastAndroid.show(String(error), 10);
    }
  };
  const editProduct = async ({ name, description, price, owner, key }) => {
    try {
      await firestore().collection('Products').doc(key).update({
        name,
        description,
        price,
        owner,
        updatedAt: firestore.FieldValue.serverTimestamp(),
      });
      ToastAndroid.show('Produto editado', 10);
      navigate(routesEnum.productsAdmin);
    } catch (error) {
      ToastAndroid.show(String(error), 10);
    }
  };
  const deleteProduct = async ({ key }) => {
    try {
      await firestore().collection('Products').doc(key).delete();
      navigate(routesEnum.productsAdmin);
      ToastAndroid.show('Produto deletado', 10);
    } catch (error) {
      ToastAndroid.show(String(error), 10);
    }
  };
  return { addProduct, editProduct, deleteProduct };
};

export default useProductsFirestore;
