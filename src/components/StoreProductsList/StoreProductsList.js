import React, { useLayoutEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native';
import { Spinner } from 'native-base';
import StoreListItem from '../StoreListItem/StoreListItem';
import { Container, Wrapper } from '../sharedComponents/sharedComponents';
import ErrorMessageComponent from '../ErrorMessageComponent/ErrorMessageComponent';
import { theme } from '../sharedComponents/theme';

const StoreProductsList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const List = () =>
    data?.length > 0 ? (
      <FlatList
        data={data}
        style={{ backgroundColor: theme.colors.beige }}
        renderItem={({ item }) => <StoreListItem item={item} />}
        keyExtractor={(item) => item.key}
      />
    ) : (
      <ErrorMessageComponent message="Erro ao carregar" />
    );

  useLayoutEffect(() => {
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
          <Spinner color="black" />
        </Wrapper>
      ) : (
        <List />
      )}
    </Container>
  );
};

export default StoreProductsList;
