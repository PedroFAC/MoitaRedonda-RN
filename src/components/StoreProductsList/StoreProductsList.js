import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native';
import { Container } from 'native-base';
import StoreListItem from '../StoreListItem/StoreListItem';
import CartFab from '../CartFab/CartFab';

const StoreProductsList = () => {
  const [data, setData] = useState([]);

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

        setData(products);
      });

    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  return (
    <Container>
      <FlatList
        data={data}
        renderItem={({ item }) => <StoreListItem item={item} />}
        keyExtractor={(item) => item.key}
      />
      <CartFab />
    </Container>
  );
};

export default StoreProductsList;
