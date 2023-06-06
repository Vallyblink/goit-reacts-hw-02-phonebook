import React from 'react';
import { nanoid } from 'nanoid';
import { ListContainer, ListItem, DeleteButton } from './styledContactList';

export const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ListContainer>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          {contact.name} : {contact.number}  
          <DeleteButton onClick={() => handleDeleteContact(contact.id)}>Видалити</DeleteButton>
        </ListItem>
      ))}
    </ListContainer>
  );
};