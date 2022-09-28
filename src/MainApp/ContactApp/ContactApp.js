import { useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

function ContactApp() {
  const [contacts, setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  return (
    <div>
      <ContactForm addContact={addContact} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default ContactApp;
