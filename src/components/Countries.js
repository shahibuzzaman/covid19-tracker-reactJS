import React, { Component } from 'react';
import Country from './Country';
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Navbar,
  Col,
  Container,
  Row,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class Countries extends Component {
  state = {
    search: '',
    filter: null,
    page: 1,
  };

  onChange = (e) => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { countries } = this.props;

    const filteredCountries = countries.filter((countries) => {
      return (
        countries.country
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    let productCount = this.props.countries.length;
    let PerPage = 8;
    let pages = Math.ceil(productCount / PerPage);
    let skip = (this.state.page - 1) * PerPage;

    return (
      <div style={{ marginTop: '10px' }}>
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
        <Container>
          <Row>
            <Col>
              <div style={userStyle}>
                {filteredCountries
                  .slice(skip, PerPage + skip)
                  .map((countries) => (
                    <Country key={countries.id} countries={countries} />
                  ))}
              </div>
            </Col>
            <Col>
              <div>
                <Pagination
                  style={{ marginLeft: '15px' }}
                  size='sm'
                  aria-label='Page navigation example'
                >
                  <PaginationItem
                    class={`page-item ${this.state.page === 1 && 'disabled'}`}
                  >
                    <PaginationLink
                      class='page-link'
                      href='#'
                      onClick={() =>
                        this.setState({ page: this.state.page - 1 })
                      }
                    >
                      Previous
                    </PaginationLink>
                  </PaginationItem>

                  {Array.from({ length: pages }).map((_, i) => (
                    <PaginationItem
                      class={`page-item ${
                        this.state.page === i + 1 ? 'active' : ''
                      }`}
                    >
                      <PaginationLink
                        class='page-link'
                        href='#'
                        onClick={() => this.setState({ page: i })}
                      >
                        {++i}
                      </PaginationLink>
                      <PaginationItem></PaginationItem>
                    </PaginationItem>
                  ))}
                  <PaginationItem
                    class={`page-item ${
                      this.state.page === pages && 'disabled'
                    }`}
                  >
                    <PaginationLink
                      class='page-link'
                      href='#'
                      onClick={() =>
                        this.setState({ page: this.state.page + 1 })
                      }
                    >
                      Next
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </div>
            </Col>
          </Row>
          <Row></Row>
        </Container>
      </div>
    );
  }
}

const userStyle = {
  marginLeft: '50px',
  marginRight: '50px',
  marginBottom: '30px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '1rem',
};

export default Countries;
