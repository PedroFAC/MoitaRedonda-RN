import React, { useState } from 'react';
import { View, ToastAndroid } from 'react-native';
import { Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import { useNavigation } from '@react-navigation/native';
import routesEnum from '../../../routes/routesConstants';
import { Input } from '../../../components/sharedComponents/sharedComponents';

const ProductForm = () => {
  const { navigate } = useNavigation();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [owner, setOwner] = useState();

  const submitProduct = async () => {
    try {
      await firestore()
        .collection('Products')
        .add({ name, description, price, owner });
      ToastAndroid.show('Produto adicionado', 10);
      navigate(routesEnum.productsAdmin);
    } catch (error) {
      ToastAndroid.show(String(error), 10);
    }
  };

  return (
    <View>
      <Input
        label="Nome"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <Input
        label="Descrição"
        value={description}
        onChangeText={(value) => setDescription(value)}
      />
      <Input
        label="Preço"
        value={price}
        onChangeText={(value) => setPrice(value)}
      />
      <Input
        label="Produtor"
        value={owner}
        onChangeText={(value) => setOwner(value)}
      />
      <Button mode="contained" onPress={() => submitProduct()}>
        Confirmar
      </Button>
    </View>
  );
};

export default ProductForm;
