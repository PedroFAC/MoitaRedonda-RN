import * as yup from 'yup';

export const userSchema = yup.object({
  username: yup
    .string()
    .required('Por favor insira um nome de usuário')
    .min(4, 'Nome de usuário precisa ter no mínimo 4 caracteres!'),
  email: yup
    .string()
    .required('Por favor insira um e-mail')
    .email('E-mail inválido!'),
  password: yup
    .string()
    .required('Por favor insira uma senha')
    .min(8, 'Senha precisa ter no mínimo 8 caracteres')
    .max(16, 'Senha só pode ter no máximo 16 caracteres'),
  confirmPassword: yup
    .string()
    .required('Por favor insira uma confirmação de senha')
    .oneOf([yup.ref('password'), null], 'As senhas precisam ser iguais'),
});
