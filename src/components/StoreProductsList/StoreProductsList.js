import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { Body, Left, List, ListItem, Text, Thumbnail } from 'native-base';
import { productDefault } from '../../assets';

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
    <List>
      {data.map((item) => (
        <ListItem key={item.id} avatar>
          <Left>
            <Thumbnail source={productDefault} />
          </Left>
          <Body>
            <Text>{item.name}</Text>
            <Text note>{item.price}</Text>
          </Body>
        </ListItem>
      ))}
    </List>
  );
};

export default StoreProductsList;
