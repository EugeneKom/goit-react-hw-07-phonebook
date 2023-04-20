import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactsList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filterName = useSelector(state => state.filters.filter);
  const dispatch = useDispatch();

  const createMarkup = contacts => {
    return contacts.map(({ name, id, number }) => {
      return (
        <li key={id} id={id}>
          <span>{name}:</span>
          <span>{number}</span>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      );
    });
  };

  const renderFilterMarkup = () => {
    const newArr = contacts.filter(({ name }) => {
      const modifiedName = name.toLowerCase();
      return modifiedName.includes(filterName.toLowerCase());
    });
    return newArr;
  };
  return (
    <ul>
      {filterName === ''
        ? createMarkup(contacts)
        : createMarkup(renderFilterMarkup())}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
};
