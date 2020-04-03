import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLungsVirus } from '@fortawesome/free-solid-svg-icons';

const Example = props => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar
        color='light'
        light
        className='fixed-top'
        style={{ padding: '20px' }}
      >
        <NavbarBrand style={{ marginTop: '-35px', marginLeft: '8px' }} href='/'>
          <FontAwesomeIcon icon={faLungsVirus} style={{ color: 'red' }} />{' '}
          COVID-19 Tracker
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className='mr-2' />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className=' text-center' style={{ marginRight: '20px' }}>
            <NavItem>
              <NavLink href='/'>Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/about-covid-19'>What is COVID-19?</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/prevention'>Prevention</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href='/about'>About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Example;
