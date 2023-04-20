import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/filterContactsSlice';

export const FilterNames = () => {
  const dispatch = useDispatch();
  const newId = nanoid();

  const handleFilterValue = ({ target: { value } }) => {
    dispatch(setFilters(value));
  };

  return (
    <>
      <label htmlFor={newId}>Find contacts by name</label>
      <input
        type="text"
        id={newId}
        name="filter"
        title="Find contacts by name"
        onChange={handleFilterValue}
      ></input>
    </>
  );
};

FilterNames.propTypes = {
  filter: PropTypes.string,
};
