import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, List } from 'react-native-paper';
import ProductsListItem from '../../components/ProductsListItem/ProductsListItem';
import { useFirebaseAuth } from '../../helpers/hooks';
import routesEnum from '../../routes/routesConstants';

const ProductsAdministration = () => {
  const { Section } = List;
  const { fireBaseSignout } = useFirebaseAuth();
  const { navigate } = useNavigation();

  return (
    <View>
      <ScrollView>
        <Section>
          <ProductsListItem name="Teste" action={() => console.log('teste')} />
        </Section>
      </ScrollView>
      <View>
        <Button
          onPress={() => navigate(routesEnum.productForm)}
          mode="contained"
        >
          Adicionar produto
        </Button>
        <Button
          mode="contained"
          color="#DB4437"
          onPress={() => fireBaseSignout()}
        >
          Encerrar sessão
        </Button>
      </View>
    </View>
  );
};

export default ProductsAdministration;
