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
      <Form>
        <label>Name</label>
        <Field type="text" name="name" />

        <label>Email</label>
        <Field type="email" name="email" />

        <label>Password</label>
        <Field type="password" name="password" />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
