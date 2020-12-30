import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'native-base';

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
      Toast.show({ text: 'Produto adicionado', type: 'success' });

      navigate(routesEnum.productsAdmin);
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger' });
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
      Toast.show({ text: 'Produto editado', type: 'success' });
      navigate(routesEnum.productsAdmin);
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger' });
    }
  };
  const deleteProduct = async ({ key }) => {
    try {
      await firestore().collection('Products').doc(key).delete();
      navigate(routesEnum.productsAdmin);
      Toast.show({ text: 'Produto deletado', type: 'success' });
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger' });
    }
  };
  return { addProduct, editProduct, deleteProduct };
};

export default useProductsFirestore;
