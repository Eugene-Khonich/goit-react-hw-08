import { useSelector } from 'react-redux';
import ContactForm from '../../components/ContactForm/ContactForm';
// import ContactList from '../../components/ContactList/ContactList';
import { selectLoading } from '../../redux/contacts/selectors';

const ContactsPage = () => {
  const isLoading = useSelector(selectLoading);

  return (
    <div>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      {/* <ContactList /> */}
    </div>
  );
};

export default ContactsPage;
