import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
const style = {
  display: 'flex',
  flexDirection: 'column',
  placeItems: 'center',
};

const RegistrationPage = () => {
  return (
    <div style={style}>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
