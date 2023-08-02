import { Component } from 'react';
import PropTypes from 'prop-types';
import { StyledInput, FormWrapper } from './StyledComponents/Form.styled';
class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string.isRequired,
    changeFilter: PropTypes.func.isRequired,
  };
  render() {
    const { filter, changeFilter } = this.props;
    return (
      <FormWrapper>
        <label>
          Find contacts by name
          <StyledInput
            type="text"
            name="filter"
            value={filter}
            onChange={changeFilter}
          />
        </label>
      </FormWrapper>
    );
  }
}
export default Filter;
