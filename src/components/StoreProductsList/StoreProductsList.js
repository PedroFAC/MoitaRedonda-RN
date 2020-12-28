import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { FlatList } from 'react-native';
import StoreListItem from '../StoreListItem/StoreListItem';

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
    <FlatList
      data={data}
      renderItem={({ item }) => <StoreListItem item={item} />}
      keyExtractor={(item) => item.key}
    />
  );
};

export default StoreProductsList;
