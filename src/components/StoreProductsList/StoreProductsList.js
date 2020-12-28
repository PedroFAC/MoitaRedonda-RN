import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import {
  Body,
  Card,
  CardItem,
  H3,
  List,
  ListItem,
  Text,
  Thumbnail,
} from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { productDefault } from '../../assets';
import routesEnum from '../../routes/routesConstants';

const StoreProductsList = () => {
  const { navigate } = useNavigation();
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
    <ScrollView>
      <List>
        {data.map((item) => (
          <ListItem key={item.key} style={{ justifyContent: 'center' }}>
            <Card
              style={{
                width: '80%',
                alignItems: 'center',
              }}
            >
              <CardItem header>
                <H3>{item.name}</H3>
              </CardItem>
              <CardItem>
                <Thumbnail large source={productDefault} />
              </CardItem>
              <CardItem>
                <Text note>Preço: {`R$ ${item.price}`}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Button
                    color="#2d2d2d"
                    style={{ width: '100%' }}
                    icon="information-outline"
                    onPress={() => navigate(routesEnum.storeProduct, item)}
                  >
                    Mais informações
                  </Button>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                  <Button style={{ width: '100%' }} icon="cart">
                    Adicionar ao carrinho
                  </Button>
                </Body>
              </CardItem>
            </Card>
          </ListItem>
        ))}
      </List>
    </ScrollView>
  );
};

export default StoreProductsList;
