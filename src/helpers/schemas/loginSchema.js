import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup
    .string()
    .required('Por favor insira seu e-mail')
    .email('E-mail inválido!'),
  password: yup.string().required('Por favor insira sua senha'),
});
