import { useSelector } from 'react-redux';

import Section from './Section/Section';
import ContactForm from './ContactForm';
import Filter from './Filter';
import Notitfication from './Notitfication';
import ContactList from './ContactList';

function App() {
  const reduxContacts = useSelector(state => state.reduxContacts);

  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
      </Section>

      <Section title="Contacts">
        <Filter />
        {!reduxContacts.length ? (
          <Notitfication message="There is no contacts in you contact list" />
        ) : (
          <ContactList />
        )}
      </Section>
    </>
  );
}

export default App;
