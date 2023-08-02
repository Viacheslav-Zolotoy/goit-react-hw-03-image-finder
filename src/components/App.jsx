import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './Form';
import ContactsList from './ContactsList';
import Filter from './Filter';
import {
  Container,
  Title,
  SecondaryTitle,
} from './StyledComponents/App.styled';
export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    try {
      const savedContacts = localStorage.getItem('contacts');
      const parsedContacts = JSON.parse(savedContacts) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ];
      this.setState({ contacts: parsedContacts });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleAddContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };
  handleChangeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  handleClickDeleteButton = event => {
    const { value } = event.currentTarget;
    const { contacts } = this.state;
    const withoutdeletedContact = contacts.filter(
      contact => contact.id !== value
    );
    this.setState({ contacts: withoutdeletedContact });
  };

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilterName = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilterName)
    );

    return (
      <Container>
        <Title>Phonebook</Title>

        <ContactForm addContact={this.handleAddContact} contacts={contacts} />
        <SecondaryTitle>Contacts</SecondaryTitle>
        <Filter filter={filter} changeFilter={this.handleChangeFilter} />

        <ContactsList
          contacts={filteredContacts}
          onDelete={this.handleClickDeleteButton}
        />
      </Container>
    );
  }
}
