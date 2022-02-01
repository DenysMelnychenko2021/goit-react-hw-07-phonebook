import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './ContactForm.module.css';

import { ContactInputs } from 'components/contactInputs';

export const ContactForm = ({ onAddContact }) => {
  const [inputName, setInputName] = useState('');
  const [inputNumber, setInputNumber] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleChange = e => {
    const { name, value, checked } = e.currentTarget;
    switch (name) {
      case 'inputName':
        setInputName(value);
        break;
      case 'inputNumber':
        setInputNumber(value);
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
    onAddContact({ id: nanoid(), inputName, inputNumber, agreed });
    resetForm();
  };

  const resetForm = () => {
    setInputName('');
    setInputNumber('');
    setAgreed(false);
  };

  return (
    <form className={s.Box} onSubmit={handleSubmit}>
      <ContactInputs
        inputName={inputName}
        inputNumber={inputNumber}
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
