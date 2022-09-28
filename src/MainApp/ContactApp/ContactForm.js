import { useState } from "react";
import { nanoid } from "nanoid";

function ContactForm({ addContact }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = {
      firstName,
      lastName,
      address,
      phone,
      id: nanoid(),
    };
    addContact(newContact);
    clearForm();
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setAddress("");
    setPhone("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <ul>
            <li>
                <label htmlFor="first-name">First name:</label>
                <input
                required
                type="text"
                name="first-name"
                id="firstname-text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                />
            </li>
            <li>
                <label htmlFor="last-name">Last name:</label>
                <input
                required
                type="text"
                name="last-name"
                id="lastname-text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                />
            </li>
            <li>
                <label htmlFor="address">Address:</label>
                <input
                required
                type="text"
                name="address"
                id="address-text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                />
            </li>
            <li>
                <label htmlFor="phone">Phone number:</label>
                <input
                required
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                id="phone-text"
                placeholder="ex. 123-456-7890"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                />
            </li>
            <button type="button" onClick={() => clearForm()}>
            Clear
            </button>
            <button type="submit">Add Contact</button>
        </ul>
      </form>
    </div>
  );
}

export default ContactForm;
