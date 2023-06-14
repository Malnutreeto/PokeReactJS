import React from 'react';
import {LinkContainer} from 'react-router-bootstrap';
import { Container, Navbar, NavbarBrand } from 'react-bootstrap';

const Header = () => {
  return (
    <header>
        <Navbar style={{background: 'radial-gradient(circle at -8.9% 51.2%, rgb(255, 124, 0) 0%, rgb(255, 124, 0) 15.9%, rgb(255, 163, 77) 15.9%, rgb(255, 163, 77) 24.4%, rgb(19, 30, 37) 24.5%, rgb(19, 30, 37) 66%)'}} collapseOnSelect>
            <Container>
                <LinkContainer to="/"> 
                <NavbarBrand
                
                >
                <strong style={{fontWeight: '700', background: '-webkit-linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                    PokeReact Manu
                </strong>
                </NavbarBrand>
                </LinkContainer>
            </Container>
        </Navbar>

    </header>
  )
}

export default Header;