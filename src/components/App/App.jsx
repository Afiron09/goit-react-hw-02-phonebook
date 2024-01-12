import React, { Component } from "react";
import { ContactForm } from "components/ContactsForm/ContactsForm";
import { Filter } from "components/Filter/Filter";
import { ContactList } from "components/ContactsList/ContactsList";
import { Container, Title, SubTitle } from "components/App/App.styled";

export class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  handleAddContact = (contact) => {
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
  };

  handelFilterContact = (event) => {
    this.setState({ filter: event.target.value });
  };

  handleDeleteContact = (uniqueId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== uniqueId),
    }));
  };

  filterContacts = () => {
    const { contacts, filter } = this.state;
    const lowerCaseFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(lowerCaseFilter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm contacts={contacts} addContact={this.handleAddContact} />
        <SubTitle>Contacts</SubTitle>
        <Filter value={filter} onChange={this.handelFilterContact} />
        <ContactList
          contacts={this.filterContacts()}
          onDeleteContact={this.handleDeleteContact}
        />
      </Container>
    );
  }
}
