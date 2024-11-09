import * as Yup from 'yup';

export const AddProfileSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Name must be at last 3 symbols')
    .max(50, 'Name must be less than 50 symbols')
    .required('Required'),
  number: Yup.number().required('Required'),
});

export const RegisterUserSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at last 2 symbols')
    .max(15, 'Name must be less then 15 symbols')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email adress')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password length must be at least 8 symbols')
    .required('Password is required'),
});

export const LoginUserSchema = Yup.object({
  email: Yup.string()
    .email('Invalid email adress')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password length must be at least 8 symbols')
    .required('Password is required'),
});
