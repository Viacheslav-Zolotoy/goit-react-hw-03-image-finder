import { Component } from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { FcSearch } from 'react-icons/fc';
import { SearchbarStyle, SearchForm, Button, Input } from './Searchbar.styled';
export class Searchbar extends Component {
  static propTypes = {
    request: PropTypes.func.isRequired,
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const search = form.elements.search.value;
    this.props.request({ search });
    form.reset();
  };
  render() {
    return (
      <SearchbarStyle>
        <SearchForm onSubmit={this.handleSubmit}>
          <Button type="submit">
            <IconContext.Provider value={{ size: 35 }}>
              <FcSearch />
            </IconContext.Provider>
          </Button>

          <Input
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchbarStyle>
    );
  }
}
