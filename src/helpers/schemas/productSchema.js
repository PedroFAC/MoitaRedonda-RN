import * as yup from 'yup';

export const productSchema = yup.object({
  name: yup.string().required('Nome obrigatório!'),
  description: yup.string().required('Descrição obrigatória!'),
  price: yup
    .number()
    .typeError('Preço precisa ser um valor numérico!')
    .required('Preço obrigatório!'),
  owner: yup.string().required('Produtor obrigatório!'),
});
