import { Component } from 'react';
import { ContactForm } from './Contactform/Contactform';
import {Filter} from './Filter/Filter'
import {ContactList} from './ContactList/ContsctList'
import {H1, H2} from './Hstyles'


export class App extends Component{
  state = {
    contacts: [ 
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},],
    filter: ''
  }

  handleFormSubmit = values =>{
    console.log(values)
    this.setState(prevState => ({
      contacts: [...prevState.contacts, values]
    }));
  }

  handleFilterChange = filterValue =>{
    this.setState({filter:filterValue})
  }

  handleDeleteContact = (id) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  }

  componentDidMount(){
    const parsedContacts =JSON.parse(localStorage.getItem('contacts'))
    if(parsedContacts){
      this.setState({contacts:parsedContacts})
    }
    
  }

  componentDidUpdate(pervProps, prevState){
    if(this.state.contacts !== prevState.contacts){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  render(){
      const {contacts, filter} = this.state;
      const filteredContacts = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()));

      return (
        <div>
          <H1>Phonebook</H1>
           <ContactForm onSubmit = {this.handleFormSubmit}></ContactForm>

          <H2>Contacts</H2>
          <Filter filter={filter}
          onFilterChange={this.handleFilterChange}></Filter>
          <ContactList contacts = {filteredContacts} handleDeleteContact={this.handleDeleteContact}></ContactList>
        </div>
      
     
   
  );
  }

};

