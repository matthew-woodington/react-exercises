function ContactList ({ contacts }) {
    const contactItems = contacts.map(({ firstName, lastName, address, phone, id }) => (
        <li key={id}>{firstName} {lastName}: {address} | {phone} </li>
    ));

    return(
        <ul>{contactItems}</ul> 
    )
}

export default ContactList;