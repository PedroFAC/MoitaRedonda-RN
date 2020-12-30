import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import { Container } from 'native-base';
import ProductsListItem from '../../components/ProductsListItem/ProductsListItem';
import { useFirebaseAuth, useProductsFirestore } from '../../helpers/hooks';
import routesEnum from '../../routes/routesConstants';
import LargeButton from '../../components/LargeButton/LargeButton';

const ProductsAdministration = () => {
  const { fireBaseSignout } = useFirebaseAuth();
  const { deleteProduct } = useProductsFirestore();
  const { navigate } = useNavigation();
  const [list, setList] = useState([]);
  useEffect(() => {
    const subscriber = firestore()
      .collection('Products')
      .onSnapshot((querySnapshot) => {
        const products = [];

        querySnapshot.forEach((documentSnapshot) => {
          products.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });

        setList(products);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <Container>
      <FlatList
        data={list}
        renderItem={({ item }) => (
          <ProductsListItem
            key={item.key}
            name={item.name}
            deleteAction={() => deleteProduct(item)}
            editAction={() =>
              navigate(routesEnum.editProductForm, { product: item })
            }
          />
        )}
      />
      <LargeButton onPress={() => navigate(routesEnum.addProductForm)}>
        Adicionar produto
      </LargeButton>
      <LargeButton color="#DB4437" onPress={() => fireBaseSignout()}>
        Encerrar sessão
      </LargeButton>
    </Container>
  );
};

export default ProductsAdministration;
