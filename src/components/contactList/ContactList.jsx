import { useSelector, useDispatch } from 'react-redux';
import s from './ContactList.module.css';
import { ContactsItem } from 'components/contactsItem';
import { deleteContact } from 'redux/contacts/contacts-actions';
import { getContactOnFilter } from 'redux/contacts/contacts-selectors';

export const ContactList = () => {
  const contacts = useSelector(getContactOnFilter);
  const dispatch = useDispatch();

  return (
    <ul className={s.List}>
      {contacts.map(({ id, inputName, inputNumber }) => (
        <li className={s.Item} key={id}>
          <ContactsItem
            name={inputName}
            number={inputNumber}
            onDelete={() => dispatch(deleteContact(id))}
          />
        </li>
      ))}
    </ul>
  );
};
