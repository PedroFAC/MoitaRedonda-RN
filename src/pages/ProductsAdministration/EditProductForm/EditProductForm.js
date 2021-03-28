import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { useRoute } from '@react-navigation/native';
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

const EditProductForm = () => {
  const { params } = useRoute();
  const { product } = params;
  const { editProduct, deleteProduct, isLoading } = useProductsFirestore();
  const [imgurl, setImgUrl] = useState(product.downloadUrl);
  const [hasChangedImg, setHasChangedImg] = useState(false);

  useEffect(() => {
    if (imgurl !== product.downloadUrl) {
      setHasChangedImg(true);
    }
  }, [imgurl]);

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
      onSubmit={(values) => editProduct({ ...values, imgurl, hasChangedImg })}
    >
      {({ handleChange, values, handleSubmit, errors }) => (
        <Container>
          <ScrollView>
            <Input label="Chave" value={values.key} mode="outlined" disabled />
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
              source={{ uri: imgurl, height: 300, width: 300 }}
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
          <LargeButton disabled={isLoading} onPress={handleSubmit}>
            Editar produto
          </LargeButton>
          <LargeButton
            disabled={isLoading}
            color="#DB4437"
            onPress={() => deleteProduct(values)}
          >
            Deletar produto
          </LargeButton>
        </Container>
      )}
    </Formik>
  );
};

export default EditProductForm;
