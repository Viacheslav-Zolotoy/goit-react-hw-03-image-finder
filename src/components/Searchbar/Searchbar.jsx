import { Component } from 'react';
import PropTypes from 'prop-types';

import { IconContext } from 'react-icons';
import { FcSearch } from 'react-icons/fc';
import { SearchbarStyle, SearchForm, Button, Input } from './Searchbar.styled';
export class Searchbar extends Component {
  static propTypes = {
    request: PropTypes.func.isRequired,
  };
  state = {
    inputValue: '',
  };
  handleSubmit = e => {
    e.preventDefault();
    const { inputValue } = this.state;
    if (inputValue === '') {
      return;
    }
    this.props.request(this.state);
    this.setState({ inputValue: '' });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      inputValue: value,
    });
  };

  render() {
    const { value } = this.state;
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
            value={value}
            onChange={this.handleChange}
          />
        </SearchForm>
      </SearchbarStyle>
    );
  }
}
