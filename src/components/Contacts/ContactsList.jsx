import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { selectContacts, selectFilter } from 'redux/Contacts/contactsSelectors';
import css from '../Contacts/Contacts.module.css';
import { deleteContactsThunk } from 'redux/Contacts/contactsThunk';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);
  const normalizedFilterValue = filter.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilterValue)
  );

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => {
        return (
          <li className={css.item} key={id}>
            <p className={css.text}>
              {name}: {number}
            </p>
            <button
              className={css.btn}
              type="button"
              onClick={() => dispatch(deleteContactsThunk(id))}
            >
              <DeleteIcon />
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
