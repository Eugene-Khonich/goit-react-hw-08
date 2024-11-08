import './App.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';
import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import ContactsPage from '../pages/ContactsPage/ContactsPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
          <Route />
        </Route>
      </Routes>
    </Layout>
  );
};

export default App;
