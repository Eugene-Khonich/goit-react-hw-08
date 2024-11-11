import css from './RegistrationForm.module.css';
import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { RegisterUserSchema } from '../utils/schema';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const INITIAL_VALUE = {
    name: '',
    email: '',
    password: '',
  };

  const onHandleSubmit = (values, actions) => {
    dispatch(
      register({
        name: values.name,
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={INITIAL_VALUE}
      onSubmit={onHandleSubmit}
      validationSchema={RegisterUserSchema}
    >
      <Form className={css.form}>
        <label className={css.label}>
          <span>Name</span>
          <Field type="text" name="name" className={css.input} />
        </label>
        <label className={css.label}>
          <span>Email</span>
          <Field type="email" name="email" className={css.input} />
        </label>
        <label className={css.label}>
          <span>Password</span>
          <Field type="password" name="password" className={css.input} />
        </label>
        <button type="submit" className={css.btn}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
