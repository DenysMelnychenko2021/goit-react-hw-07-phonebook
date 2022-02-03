import s from './ContactList.module.css';
import { ContactsItem } from 'components/contactsItem';

import { useDeleteContactMutation } from 'redux/contacts/contacts-api';

export const ContactList = ({ contacts }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className={s.List}>
      {contacts.map(({ id, name, phone }) => (
        <li className={s.Item} key={id}>
          <ContactsItem
            name={name}
            number={phone}
            onDelete={() => deleteContact(id)}
          />
        </li>
      ))}
    </ul>
  );
};
