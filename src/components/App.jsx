import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortid from 'shortid';
import Section from './Section/Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Notitfication from './Notitfication';
import ContactList from './ContactList';
import {
  getContactsFromLS,
  addContactsToLS,
} from '../helpers/LocalStorage/LocalStorage';

import { set } from 'redux/reduxFilter/slice';
import { add, remove } from 'redux/reduxContacts/slice';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const dispatch = useDispatch();

  const reduxContacts = useSelector(state => state.reduxContacts);
  const reduxFilter = useSelector(state => state.reduxFilter);

  useEffect(() => {
    if (getContactsFromLS('contacts')) {
      dispatch(add(getContactsFromLS('contacts')));
    } else {
      dispatch(add(initialContacts));
    }
  }, []);

  useEffect(() => {
    addContactsToLS('contacts', reduxContacts);
  }, [reduxContacts]);

  const submitHandler = e => {
    e.preventDefault();

    const newContactName = e.target.elements.name.value;
    const newContactNumber = e.target.elements.number.value;

    if (contactСheck(newContactName)) {
      alert(`${newContactName} is already in you contacts`);
      return;
    }

    const newContact = {
      id: shortid(),
      name: newContactName,
      number: newContactNumber,
    };

    addNewContact(newContact);

    e.target.reset();
  };

  function addNewContact(newContact) {
    dispatch(add([newContact]));
  }

  function contactСheck(name) {
    return reduxContacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
  }

  const onFilterInputHandler = e => {
    dispatch(set(e.target.value.toLowerCase()));
  };

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
    <>
      <Section title="Phonebook">
        <ContactForm onFormSubmit={submitHandler} />
      </Section>

      <Section title="Contacts">
        <Filter
          onFilterInputHandler={onFilterInputHandler}
          filterValue={reduxFilter}
        />
        {!reduxContacts.length ? (
          <Notitfication message="There is no contacts in you contact list" />
        ) : (
          <ContactList
            contacts={contactsFiltering()}
            removeHandler={removeContactHandler}
          />
        )}
      </Section>
    </>
  );
}

export default App;
