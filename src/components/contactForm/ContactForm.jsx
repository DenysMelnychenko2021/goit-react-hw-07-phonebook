import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

import { ContactInputs } from 'components/contactInputs';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleChange = e => {
    const { name, value, checked } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'agreed':
        setAgreed(checked);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAddContact({ name, phone, agreed });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setPhone('');
    setAgreed(false);
  };

  return (
    <form className={s.Box} onSubmit={handleSubmit}>
      <ContactInputs
        inputName={name}
        inputNumber={phone}
        handleChange={handleChange}
      />

      <label>
        I agree to the processing of data
        <input
          type="checkbox"
          name="agreed"
          checked={agreed}
          onChange={handleChange}
        />
      </label>

      <button type="submit" disabled={!agreed}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
