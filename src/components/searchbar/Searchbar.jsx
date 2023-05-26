import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const Searchbar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handelChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handelSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Нельзя сделать запрос по пустому query');
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handelSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          value={query}
          onChange={handelChange}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
};

Searchbar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
