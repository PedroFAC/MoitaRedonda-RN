import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native';
import { Container, H3, Icon, Spinner } from 'native-base';
import StoreListItem from '../StoreListItem/StoreListItem';
import CartFab from '../CartFab/CartFab';
import { Wrapper } from '../sharedComponents/sharedComponents';

const StoreProductsList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const List = () =>
    data?.length > 0 ? (
      <FlatList
        data={data}
        renderItem={({ item }) => <StoreListItem item={item} />}
        keyExtractor={(item) => item.key}
      />
    ) : (
      <Wrapper>
        <Icon name="alert" />
        <H3>Erro ao Carregar</H3>
      </Wrapper>
    );

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

        setData(products);
        setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <Container>
      {loading ? (
        <Wrapper>
          <Spinner color="blue" />
        </Wrapper>
      ) : (
        <List />
      )}

      <CartFab />
    </Container>
  );
};

export default StoreProductsList;
