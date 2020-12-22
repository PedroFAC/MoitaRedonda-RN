import React from 'react';
import { Text } from 'react-native';
import { Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import {
  Container,
  Input,
} from '../../../components/sharedComponents/sharedComponents';
import { productSchema } from '../../../helpers/schemas/productSchema';
import { useProductsFirestore } from '../../../helpers/hooks';

const AddProductForm = () => {
  const { addProduct } = useProductsFirestore();

  return (
    <Formik
      initialValues={{ name: '', description: '', price: '', owner: '' }}
      validationSchema={productSchema}
      onSubmit={(values) => addProduct(values)}
    >
      {({ handleChange, values, handleSubmit, errors }) => (
        <>
          <ScrollView>
            <Container>
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
            </Container>
          </ScrollView>
          <Button mode="contained" onPress={handleSubmit}>
            Confirmar
          </Button>
        </>
      )}
    </Formik>
  );
};

export default AddProductForm;
