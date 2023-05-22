import { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handelChange = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase() });
  };

  handelSubmit = e => {
    const { query } = this.state;
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Нельзя сделать запрос по пустому query');
    }

    this.props.onSubmit(this.state);
    this.setState({ query: '' });
  };
  render() {
    const { query } = this.state;

    return (
      <Header>
        <SearchForm onSubmit={this.handelSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>Search</SearchFormButtonLabel>
          </SearchFormButton>

          <SearchFormInput
            value={query}
            onChange={this.handelChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

Searchbar.protoTypes = {
  onSubmit: PropTypes.func.isRequired,
};
