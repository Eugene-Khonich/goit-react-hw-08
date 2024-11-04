import { Formik, Form, Field } from 'formik';

const RegistrationForm = () => {
  return (
    <Formik>
      <Form>
        <label>
          <span>Name</span>
          <Field />
        </label>
        <label>
          <span>Email</span>
          <Field />
        </label>
        <label>
          <span>Password</span>
          <Field />
        </label>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
