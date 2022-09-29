import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function ContactApp() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div className="contact-app">
      <ContactForm addContact={addContact} />
      <div className="contact-container">
        <h1 className="cont-title">Contacts:</h1>
        <ContactList contacts={contacts} />
      </div>
    </div>
  );
}

export default ContactApp;
