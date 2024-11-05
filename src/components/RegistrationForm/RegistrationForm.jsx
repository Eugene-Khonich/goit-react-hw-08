import { Formik, Form, Field } from 'formik';
import { register } from '../../redux/auth/operations';
import { useDispatch } from 'react-redux';
import { useId } from 'react';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const INITIAL_VALUE = {
    name: '',
    email: '',
    password: '',
  };
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

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
    <Formik initialValues={INITIAL_VALUE} onSubmit={onHandleSubmit}>
      <Form>
        <label htmlFor={nameId}>Name</label>
        <Field type="text" name="name" id={nameId} s />

        <label htmlFor={emailId}>Email</label>
        <Field type="email" name="email" id={emailId} />

        <label htmlFor={passwordId}>Password</label>
        <Field type="password" name="password" id={passwordId} />
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
