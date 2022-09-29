function ContactList({ contacts }) {
  const contactItems = contacts.map(({ firstName, lastName, address, phone, id }) => (
    <li className="contact-item" key={id}>
      {firstName} {lastName}: {address} | {phone}{" "}
    </li>
  ));

  return <ul className="contacts">{contactItems}</ul>;
}

export default ContactList;
