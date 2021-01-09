import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import { useNavigation } from '@react-navigation/native';
import { Toast } from 'native-base';
import { useState } from 'react';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

import routesEnum from '../../routes/routesConstants';

const useProductsFirestore = () => {
  const { navigate } = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const uploadImage = async (path) => {
    try {
      const fileName = uuidv4();
      const fileExtension = path.split('.').pop();
      const wholeFile = `${fileName}.${fileExtension}`;
      const reference = storage().ref(`images/${wholeFile}`);

      await reference.putFile(path);
      const downloadUrl = await reference.getDownloadURL();
      return { downloadUrl, wholeFile };
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger', duration: 15 });
      return { downloadUrl: null, wholeFile: null };
    }
  };

  const addProduct = async ({ name, description, price, owner, imgurl }) => {
    try {
      setIsLoading(true);
      Toast.show({ text: 'Enviando Imagem', type: 'success' });

      const { downloadUrl, wholeFile } = await uploadImage(imgurl);

      await firestore().collection('Products').add({
        name,
        description,
        price,
        owner,
        createdAt: firestore.FieldValue.serverTimestamp(),
        updatedAt: firestore.FieldValue.serverTimestamp(),
        downloadUrl,
        imgFileName: wholeFile,
      });
      Toast.show({ text: 'Produto adicionado', type: 'success' });

      navigate(routesEnum.productsAdmin);
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger', duration: 15 });
    } finally {
      setIsLoading(false);
    }
  };
  const editProduct = async ({
    name,
    description,
    price,
    owner,
    key,
    imgurl,
    hasChangedImg,
  }) => {
    try {
      setIsLoading(true);
      if (hasChangedImg) {
        Toast.show({ text: 'Enviando Imagem', type: 'success' });
        const { downloadUrl, wholeFile } = await uploadImage(imgurl);
        await firestore().collection('Products').doc(key).update({
          name,
          description,
          price,
          owner,
          downloadUrl,
          imgFileName: wholeFile,
          updatedAt: firestore.FieldValue.serverTimestamp(),
        });
      } else {
        await firestore().collection('Products').doc(key).update({
          name,
          description,
          price,
          owner,
          updatedAt: firestore.FieldValue.serverTimestamp(),
        });
      }

      Toast.show({ text: 'Produto editado', type: 'success' });
      navigate(routesEnum.productsAdmin);
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger' });
    } finally {
      setIsLoading(false);
    }
  };
  const deleteProduct = async ({ key }) => {
    try {
      setIsLoading(true);

      await firestore().collection('Products').doc(key).delete();
      navigate(routesEnum.productsAdmin);
      Toast.show({ text: 'Produto deletado', type: 'success' });
    } catch (error) {
      Toast.show({ text: String(error), type: 'danger' });
    } finally {
      setIsLoading(false);
    }
  };

  return { addProduct, editProduct, deleteProduct, isLoading, uploadImage };
};

export default useProductsFirestore;
