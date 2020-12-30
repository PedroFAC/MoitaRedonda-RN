import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useRoute } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import {
  Wrapper,
  Input,
} from '../../../components/sharedComponents/sharedComponents';
import { productSchema } from '../../../helpers/schemas/productSchema';
import { useProductsFirestore } from '../../../helpers/hooks';

const EditProductForm = () => {
  const { params } = useRoute();
  const { product } = params;
  const { editProduct, deleteProduct } = useProductsFirestore();

  return (
    <Formik
      initialValues={{
        key: product.key,
        name: product.name,
        description: product.description,
        price: product.price,
        owner: product.owner,
      }}
      validationSchema={productSchema}
      onSubmit={(values) => editProduct(values)}
    >
      {({ handleChange, values, handleSubmit, errors }) => (
        <>
          <ScrollView>
            <Wrapper>
              <Input
                label="Chave"
                value={values.key}
                mode="outlined"
                disabled
              />
              <Input
                label="Nome"
                value={values.name}
                mode="outlined"
                onChangeText={handleChange('name')}
                error={errors.name}
              />
              <Text>{errors.name}</Text>
              <Input
                label="Descrição"
                value={values.description}
                mode="outlined"
                onChangeText={handleChange('description')}
                error={errors.description}
              />
              <Text>{errors.description}</Text>

              <Input
                label="Preço"
                value={values.price}
                mode="outlined"
                onChangeText={handleChange('price')}
                keyboardType="number-pad"
                error={errors.price}
              />
              <Text>{errors.price}</Text>

              <Input
                label="Produtor"
                value={values.owner}
                mode="outlined"
                onChangeText={handleChange('owner')}
                error={errors.owner}
              />
              <Text>{errors.owner}</Text>
            </Wrapper>
          </ScrollView>
          <Button mode="contained" onPress={handleSubmit}>
            Editar produto
          </Button>
          <Button
            color="#DB4437"
            mode="contained"
            onPress={() => deleteProduct(values)}
          >
            Deletar produto
          </Button>
        </>
      )}
    </Formik>
  );
};

export default EditProductForm;
