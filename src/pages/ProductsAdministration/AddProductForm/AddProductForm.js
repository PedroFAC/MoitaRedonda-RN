import React, { useState } from 'react';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Formik } from 'formik';

import { Button } from 'react-native-paper';
import {
  Container,
  ErrorText,
  Input,
} from '../../../components/sharedComponents/sharedComponents';
import { productSchema } from '../../../helpers/schemas/productSchema';
import { useProductsFirestore } from '../../../helpers/hooks';
import LargeButton from '../../../components/LargeButton/LargeButton';
import { pickFromCamera, pickFromGallery } from '../../../helpers/imgPicker';

const AddProductForm = () => {
  const { addProduct, isLoading } = useProductsFirestore();
  const [imgurl, setImgUrl] = useState('');

  return (
    <Formik
      initialValues={{ name: '', description: '', price: '', owner: '' }}
      validationSchema={productSchema}
      onSubmit={(values) => addProduct({ ...values, imgurl })}
    >
      {({ handleChange, values, handleSubmit, errors }) => (
        <Container>
          <ScrollView>
            <Input
              label="Nome"
              value={values.name}
              mode="outlined"
              onChangeText={handleChange('name')}
              error={errors.name}
              disabled={isLoading}
            />
            <ErrorText>{errors.name}</ErrorText>
            <Input
              label="Descrição"
              value={values.description}
              mode="outlined"
              onChangeText={handleChange('description')}
              error={errors.description}
              disabled={isLoading}
            />
            <ErrorText>{errors.description}</ErrorText>

            <Input
              label="Preço"
              value={values.price}
              mode="outlined"
              onChangeText={handleChange('price')}
              keyboardType="number-pad"
              error={errors.price}
              disabled={isLoading}
            />
            <ErrorText>{errors.price}</ErrorText>

            <Input
              label="Produtor"
              value={values.owner}
              mode="outlined"
              onChangeText={handleChange('owner')}
              error={errors.owner}
              disabled={isLoading}
            />
            <ErrorText>{errors.owner}</ErrorText>
            <Image
              source={{ uri: imgurl }}
              width={300}
              height={300}
              style={{
                borderColor: 'black',
                borderWidth: 1,
                alignSelf: 'center',
                backgroundColor: 'lightgrey',
              }}
            />
            <Button onPress={() => pickFromGallery(setImgUrl)}>
              Escolher imagem da galeria
            </Button>
            <Button onPress={() => pickFromCamera(setImgUrl)}>
              Tirar foto
            </Button>
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
