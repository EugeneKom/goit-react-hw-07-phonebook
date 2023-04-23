import {
  selectContacts,
  selectFilerContact,
  selectIsLoading,
} from 'components/utils/selectors';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ImSpinner } from 'react-icons/im';
import { deleteContact } from 'redux/contactThunk';
import { IconContext } from 'react-icons';

export const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const filterName = useSelector(selectFilerContact);
  const dispatch = useDispatch();

  console.log(ImSpinner);

  const createMarkup = contacts => {
    return contacts.map(({ name, id, phone }) => {
      return (
        <li key={id} id={id}>
          <span>{name}:</span>
          <span>{phone}</span>
          <button
            disabled={isLoading}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
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
    <>
      {isLoading && (
        <IconContext.Provider
          value={{
            className: 'spinner',
          }}
        >
          <ImSpinner />
        </IconContext.Provider>
      )}
      <ul>
        {filterName === ''
          ? createMarkup(contacts)
          : createMarkup(renderFilterMarkup())}
      </ul>
    </>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
};
