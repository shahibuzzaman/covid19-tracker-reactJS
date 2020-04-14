import React, { Component } from 'react';
import Country from './Country';
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Navbar
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Countries extends Component {
  state = {
    search: '',
    filter: null
  };

  onChange = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { countries } = this.props;

    const filteredCountries = countries.filter(countries => {
      return (
        countries.country
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div style={{ marginTop: '70px' }}>
        <Navbar
          light
          expand='md'
          className='fixed-top'
          style={{ width: '35%', marginLeft: '32%', marginTop: '5px' }}
        >
          <InputGroup size='sm'>
            <InputGroupAddon addonType='prepend'>
              <InputGroupText>
                <FontAwesomeIcon icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              placeholder='sm'
              bsSize='sm'
              type='text'
              name='text'
              id='text'
              placeholder='Search by Country Name ....'
              onChange={this.onChange}
            />
          </InputGroup>
        </Navbar>

        <div style={userStyle}>
          {filteredCountries.map(countries => (
            <Country key={countries.id} countries={countries} />
          ))}
        </div>
      </div>
    );
  }
}

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Countries;
