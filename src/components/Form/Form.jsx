import { useState } from 'react';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import css from '../Form/Form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/Contacts/contactsSelectors';
import { createContactsThunk } from 'redux/Contacts/contactsThunk';

export function InputForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputHandler = ({ target }) => {
    switch (target.name) {
      case 'name':
        setName(target.value);
        break;
      case 'number':
        setNumber(target.value);
        break;
      default:
        return;
    }
  };

  const submitHandler = e => {
    e.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts!`);
      setName('');
      setNumber('');
      return;
    }

    dispatch(
      createContactsThunk({
        name,
        number,
      })
    );

    setName('');
    setNumber('');
  };

  return (
    <div>
      <form className={css.form} name="inputForm" onSubmit={submitHandler}>
        <div className={css.formInputContainer}>
          <label htmlFor="name">
            <p>Name: </p>
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={inputHandler}
              value={name}
            />
          </label>
          <label htmlFor="number">
            <p>Number: </p>
            <input
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={inputHandler}
              value={number}
            />
          </label>
        </div>
        <button className={css.btn} type="submit">
          <AddCircleSharpIcon />
          Add contact
        </button>
      </form>
    </div>
  );
}
