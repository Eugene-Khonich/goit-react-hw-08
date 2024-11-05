import { Formik, Field, Form } from 'formik';
import { logIn } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useId } from 'react';

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();
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
    <Formik initialValues={INITIAL_VALUES} onSubmit={onHandleSubmit}>
      <Form>
        <label htmlFor={emailId}>Email</label>
        <Field type="email" name="email" id={emailId} />

        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId} />

        <button type="submit">Log In</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
