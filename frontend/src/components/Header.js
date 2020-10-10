import React from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' collapseOnSelect expand="lg">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>ProShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <LinkContainer to='#home'>
                                <Nav.Link><i className='px-1 fas fa-shopping-cart'></i>Cart</Nav.Link>
                            </LinkContainer>
                            <LinkContainer to='#link'>
                                <Nav.Link><i className='px-1 fas fa-user'></i>Sign In</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
