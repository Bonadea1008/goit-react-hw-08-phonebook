import { useEffect } from 'react';
import { getContactsThunk } from 'redux/Contacts/contactsThunk';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from 'redux/Contacts/contactsSelectors';
import { Section } from '../Section/Section';
import { InputForm } from '../Form/Form';
import { ContactsList } from '../Contacts/ContactsList';
import { Filter } from '../Filter/Filter';
import { Loader } from '../Loader';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <>
      <Section title="Phonebook">
        <InputForm />
      </Section>
      {isLoading && !error && <Loader />}
      {contacts.length > 0 && (
        <Section title="Contacts">
          <Filter />
          <ContactsList />
        </Section>
      )}
    </>
  );
};

export default ContactsPage;
