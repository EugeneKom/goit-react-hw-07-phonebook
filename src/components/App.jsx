import { Wrapper } from './App.styled';
import { ContactsForm } from './ContactsForm/ContactsForm';
import { ContactsList } from './ContactsList/ContactsList';
import { ContactsWrapper } from './ContactsList/ContactsList.styled';
import { FilterNames } from './FilterNames/FilterNames';

export const App = () => {
  return (
    <>
      <Wrapper>
        <Wrapper>
          <h1>Phone book</h1>
          <ContactsForm />
        </Wrapper>
        <ContactsWrapper>
          <div>
            <h2>Contacts</h2>
            <FilterNames />
          </div>
          <div>
            <ContactsList />
          </div>
        </ContactsWrapper>
      </Wrapper>
    </>
  );
};
