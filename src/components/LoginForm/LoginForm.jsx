import { Formik, Field, Form } from 'formik';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { LoginUserSchema } from '../utils/schema';

const LoginForm = () => {
  const dispatch = useDispatch();

  const INITIAL_VALUES = {
    email: '',
    password: '',
  };
  const onHandleSubmit = (values, actions) => {
    dispatch(
      logIn({
        email: values.email,
        password: values.password,
      })
    );
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={onHandleSubmit}
      validationSchema={LoginUserSchema}
    >
      <Form>
        <label>
          <span>Email</span>
          <Field type="email" name="email" />
        </label>
        <label>
          <span>Password</span>
          <Field type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
