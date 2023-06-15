import { useState, useEffect } from 'react';
import  ContactForm  from './Contactform/Contactform';
import {Filter} from './Filter/Filter'
import {ContactList} from './ContactList/ContsctList'
import { nanoid } from 'nanoid';
import {H1, H2} from './Hstyles'


export default  function App (){
   const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  const handleFormSubmit = (values) => {
    const { name, number } = values;
    const existingContact = contacts.find(
      (contact) =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (existingContact) {
      alert('Hey Dude, you have it already');
      return;
    }

    const newContact = { ...values, id: nanoid() };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <H1>Phonebook</H1>
      <ContactForm onSubmit={handleFormSubmit} />

      <H2>Contacts</H2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
