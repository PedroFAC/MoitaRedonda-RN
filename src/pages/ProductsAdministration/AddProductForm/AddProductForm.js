import React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';
import { Container } from 'native-base';
import {
  Wrapper,
  Input,
} from '../../../components/sharedComponents/sharedComponents';
import { productSchema } from '../../../helpers/schemas/productSchema';
import { useProductsFirestore } from '../../../helpers/hooks';
import LargeButton from '../../../components/LargeButton/LargeButton';

const AddProductForm = () => {
  const { addProduct, isLoading } = useProductsFirestore();

  return (
    <Formik
      initialValues={{ name: '', description: '', price: '', owner: '' }}
      validationSchema={productSchema}
      onSubmit={(values) => addProduct(values)}
    >
      {({ handleChange, values, handleSubmit, errors }) => (
        <Container>
          <ScrollView>
            <Wrapper>
              <Input
                label="Nome"
                value={values.name}
                mode="outlined"
                onChangeText={handleChange('name')}
                error={errors.name}
                disabled={isLoading}
              />
              <Text>{errors.name}</Text>
              <Input
                label="Descrição"
                value={values.description}
                mode="outlined"
                onChangeText={handleChange('description')}
                error={errors.description}
                disabled={isLoading}
              />
              <Text>{errors.description}</Text>

              <Input
                label="Preço"
                value={values.price}
                mode="outlined"
                onChangeText={handleChange('price')}
                keyboardType="number-pad"
                error={errors.price}
                disabled={isLoading}
              />
              <Text>{errors.price}</Text>

              <Input
                label="Produtor"
                value={values.owner}
                mode="outlined"
                onChangeText={handleChange('owner')}
                error={errors.owner}
                disabled={isLoading}
              />
              <Text>{errors.owner}</Text>
            </Wrapper>
          </ScrollView>
          <LargeButton
            disabled={isLoading}
            mode="contained"
            onPress={handleSubmit}
          >
            Confirmar
          </LargeButton>
        </Container>
      )}
    </Formik>
  );
};

export default AddProductForm;
