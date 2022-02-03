import { useSelector } from 'react-redux';

import { Container } from 'components/container';
import { Section } from 'components/section';
import { Contacts } from 'components/contacts';
import { ContactForm } from 'components/contactForm/ContactForm';
import { Filter } from 'components/filter/Filter';
import { ContactList } from 'components/contactList/ContactList';
import { getFilter } from 'redux/contacts/contacts-selectors';

import {
  useFetchContactsQuery,
  useCreateContactMutation,
} from 'redux/contacts/contacts-api';

export const Phonebook = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [createContact] = useCreateContactMutation();

  const filter = useSelector(getFilter);

  const addContactSubmit = newContact => {
    if (contacts.find(contact => newContact.name === contact.name))
      alert(`${newContact.name} is already in contacts`);
    else if (contacts.find(contact => newContact.phone === contact.phone))
      alert(` this number ${newContact.phone} is already in contacts`);
    else createContact(newContact);
  };

  const contactsFromFilter = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <Container title="Phonebook">
      <Section>
        <ContactForm onAddContact={addContactSubmit} />
      </Section>
      <Section>
        <Contacts title="Contacts">
          {contacts?.length > 1 && <Filter filterValue={filter} />}
          {contacts?.length > 0 ? (
            <ContactList contacts={contactsFromFilter} />
          ) : (
            'There are no contacts in the phone book. Please add a contact'
          )}
        </Contacts>
      </Section>
    </Container>
  );
};
