import React from 'react';
import logo from '../../img/logo-hotel.png'
import './Header.css'
import { Button, Container, Nav, Navbar,  } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="white">
                <Container>
                    <div className="navbar-group d-md-flex">
                    <Navbar.Brand as={Link} to= "/" href="#home">
                        <img src={logo} width="300px" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="navbar-list pt-2">
                            <Nav.Link as={Link} to ="/" href="#home">Home</Nav.Link>
                            <Nav.Link as={Link} to ="/rooms"href= "#rooms">Rooms</Nav.Link>
                            <Nav.Link as={Link} to = "/about">About Us</Nav.Link>
                            <Nav.Link href="#conact">Contact Us</Nav.Link>
                            <Link className='custom-btn' as={Link} to ="/login">Book Now</Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;