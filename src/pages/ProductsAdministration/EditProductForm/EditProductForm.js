import React, { useState } from 'react';
import { ToastAndroid } from 'react-native';
import { Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import routesEnum from '../../../routes/routesConstants';
import {
  Container,
  Input,
} from '../../../components/sharedComponents/sharedComponents';

const EditProductForm = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();
  const { product } = params;
  const [key] = useState(product.key);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description);
  const [price, setPrice] = useState(product.price);
  const [owner, setOwner] = useState(product.owner);

  const submitProduct = async () => {
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

  const deleteProduct = async () => {
    try {
      await firestore().collection('Products').doc(key).delete();
      navigate(routesEnum.productsAdmin);
      ToastAndroid.show('Produto deletado', 10);
    } catch (error) {
      ToastAndroid.show(String(error), 10);
    }
  };

  return (
    <>
      <ScrollView>
        <Container>
          <Input
            label="Chave de produto"
            value={key}
            mode="outlined"
            disabled
          />
          <Input
            label="Nome"
            value={name}
            mode="outlined"
            onChangeText={(value) => setName(value)}
          />
          <Input
            label="Descrição"
            value={description}
            mode="outlined"
            onChangeText={(value) => setDescription(value)}
          />
          <Input
            label="Preço"
            value={price}
            mode="outlined"
            onChangeText={(value) => setPrice(value)}
          />
          <Input
            label="Produtor"
            value={owner}
            mode="outlined"
            onChangeText={(value) => setOwner(value)}
          />
        </Container>
      </ScrollView>

      <Button mode="contained" onPress={() => submitProduct()}>
        Editar produto
      </Button>
      <Button color="#DB4437" mode="contained" onPress={() => deleteProduct()}>
        Deletar produto
      </Button>
    </>
  );
};

export default EditProductForm;
