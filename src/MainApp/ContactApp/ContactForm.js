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
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h1 className="cont-form-title">Add Contact</h1>
        <ul className="cont-form-list">
          <li className="cont-form-li">
            <label className="cont-form-label" htmlFor="first-name">
              First name:
            </label>
            <input
              className="contact-text"
              required
              type="text"
              name="first-name"
              id="firstname-text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </li>
          <li className="cont-form-li">
            <label className="cont-form-label" htmlFor="last-name">
              Last name:
            </label>
            <input
              className="contact-text"
              required
              type="text"
              name="last-name"
              id="lastname-text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </li>
          <li className="cont-form-li">
            <label className="cont-form-label" htmlFor="address">
              Address:
            </label>
            <input
              className="contact-text"
              required
              type="text"
              name="address"
              id="address-text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </li>
          <li className="cont-form-li">
            <label className="cont-form-label" htmlFor="phone">
              Phone number:
            </label>
            <input
              className="contact-text"
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
          <section className="cont-buttons">
            <button className="cont-button" type="button" onClick={() => clearForm()}>
              Clear
            </button>
            <button className="cont-button" type="submit">
              Add Contact
            </button>
          </section>
        </ul>
      </form>
    </div>
  );
}

export default ContactForm;
