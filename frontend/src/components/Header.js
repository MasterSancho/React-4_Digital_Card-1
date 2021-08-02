import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Container, Navbar, Nav } from 'react-bootstrap';

const Header = () => {
 return (
  <header>
   <Navbar
    className='fixed-top'
    bg='primary'
    variant='dark'
    expand='md'
    collapseOnSelect>
    <Container>
     <LinkContainer to='/' className='navbar-brand'>
      <Navbar.Brand>Remax</Navbar.Brand>
     </LinkContainer>

     <Navbar.Toggle aria-controls='basic-navbar-nav' />
     <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='ms-auto'>
       <LinkContainer to='/gallery'>
        <Nav.Link>Gallery</Nav.Link>
       </LinkContainer>

       <LinkContainer to='/about'>
        <Nav.Link>About</Nav.Link>
       </LinkContainer>

       <LinkContainer to='/signin'>
        <Nav.Link>Log In</Nav.Link>
       </LinkContainer>
      </Nav>
     </Navbar.Collapse>
    </Container>
   </Navbar>
  </header>
 );
};

export default Header;
