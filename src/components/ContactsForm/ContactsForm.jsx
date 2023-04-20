import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FormStyle } from './ContactsForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';

export const ContactsForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();
  const newId = nanoid();

  const checkNameForMath = name => {
    let flag = true;
    contacts.forEach(el => {
      if (el.name === name) {
        flag = false;
        return alert(`${name} is already in contacts`);
      }
    });
    return flag;
  };

  const onSubmitForm = e => {
    e.preventDefault();
    const form = e.target;

    if (checkNameForMath(form.elements.name.value)) {
      dispatch(
        addContact({
          name: form.elements.name.value,
          number: form.elements.number.value,
          id: nanoid(),
        })
      );
    }
    form.reset();
  };

  return (
    <>
      <FormStyle onSubmit={onSubmitForm}>
        <label htmlFor={newId}>
          <span>Name</span>
        </label>
        <input
          id={newId}
          type="text"
          name="name"
          pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={newId}>
          <span>Number</span>
        </label>
        <input
          id={newId}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button>Add contact</button>
      </FormStyle>
    </>
  );
};

ContactsForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
