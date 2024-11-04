import { Formik, Field } from 'formik';

const LoginForm = () => {
  return (
    <Formik>
      <label>
        <span>Email</span>
        <Field />
      </label>
      <label>
        <span>Password</span>
        <Field />
      </label>
    </Formik>
  );
};

export default LoginForm;
