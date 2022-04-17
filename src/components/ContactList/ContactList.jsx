import { useSelector, useDispatch } from 'react-redux';

import s from './ContactList.module.css';
import ContactItems from '../ContactItems';
import { remove } from 'redux/reduxContacts/slice';

function ContactList() {
  const reduxContacts = useSelector(state => state.reduxContacts);
  const reduxFilter = useSelector(state => state.reduxFilter);

  const dispatch = useDispatch();

  function contactsFiltering() {
    return reduxContacts.filter(contact =>
      contact.name.toLowerCase().includes(reduxFilter)
    );
  }

  const removeContactHandler = e => {
    const contactToRemove = e.target.name;
    const contactIndex = findContactIndex(contactToRemove);

    dispatch(remove(contactIndex));
  };

  function findContactIndex(contact) {
    return reduxContacts.findIndex(item => item.name === contact);
  }

  return (
    <ul className={s.list}>
      {contactsFiltering().map(contact => {
        return (
          <ContactItems
            key={contact.id}
            contact={contact}
            clickHandler={removeContactHandler}
          />
        );
      })}
    </ul>
  );
}

export default ContactList;
