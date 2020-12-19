import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, List } from 'react-native-paper';
import { useFirebaseAuth } from '../../helpers/hooks';
import routesEnum from '../../routes/routesConstants';

const ProductsAdministration = () => {
  const { Section, Item } = List;
  const { fireBaseSignout } = useFirebaseAuth();
  const { navigate } = useNavigation();

  return (
    <View>
      <ScrollView>
        <Section>
          <Item title="item 1" />
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
