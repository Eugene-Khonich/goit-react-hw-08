import './App.module.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contactsOps';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from '../pages/HomePage/HomePage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route element={<HomePage />} />
        <Route />
      </Route>
    </Routes>
  );
  // return (
  //   <div className={css.container}>
  //     <h1 className={css.header}>Phonebook</h1>
  //     <ContactForm />
  //     <SearchBox />
  //     {isLoading && <p>Request in progress...</p>}
  //     {error && <p>We found an error: {error}</p>}
  //     <ContactList />
  //   </div>
  // );
};

export default App;
