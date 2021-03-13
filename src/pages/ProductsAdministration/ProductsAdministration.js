import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native-gesture-handler';
import { Spinner } from 'native-base';
import ProductsListItem from '../../components/ProductsListItem/ProductsListItem';
import { useFirebaseAuth, useProductsFirestore } from '../../helpers/hooks';
import routesEnum from '../../routes/routesConstants';
import LargeButton from '../../components/LargeButton/LargeButton';
import {
  Container,
  Wrapper,
} from '../../components/sharedComponents/sharedComponents';
import ErrorMessageComponent from '../../components/ErrorMessageComponent/ErrorMessageComponent';

const ProductsAdministration = () => {
  const { fireBaseSignout } = useFirebaseAuth();
  const { deleteProduct } = useProductsFirestore();
  const { navigate } = useNavigation();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use

    return () => subscriber();
  }, []);

  const List = () =>
    list?.length > 0 ? (
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
    ) : (
      <ErrorMessageComponent message="Os produtos adicionados a listagem estarão disponíveis aqui" />
    );

  return (
    <Container>
      {loading ? (
        <Wrapper>
          <Spinner color="blue" />
        </Wrapper>
      ) : (
        <List />
      )}

      <LargeButton onPress={() => navigate(routesEnum.addProductForm)}>
        Adicionar produto
      </LargeButton>
      <LargeButton onPress={() => fireBaseSignout()}>
        Encerrar sessão
      </LargeButton>
    </Container>
  );
};

export default ProductsAdministration;
