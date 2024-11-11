import LoginForm from '../../components/LoginForm/LoginForm';
const style = {
  display: 'flex',
  flexDirection: 'column',
  placeItems: 'center',
};

const LoginPage = () => {
  return (
    <div style={style}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
