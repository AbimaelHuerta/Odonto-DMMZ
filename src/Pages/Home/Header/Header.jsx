import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../Images/DR.DIANA MENDOZA_logo.png';
import './Header.css';

const Header = () => {


    return (
        <div className="head-bg">
            <Navbar className="navbar" collapseOnSelect expand="lg">
                <Container className="container-head">
                    <Navbar.Brand href="/home"><img src={logo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" expand="lg"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto align-items-center">
                            <Link to="/home" className='list-item text-decoration-none'>Inicio</Link>
                            {/* <Link to="/about" className='list-item text-decoration-none'>Servicios</Link>
                            <Link to="/service" className='list-item text-decoration-none'>Horarios</Link> */}
                            <Link to="/dentist" className='list-item text-decoration-none'>Conoceme</Link>
                            <Link to="/contact" className='list-item text-decoration-none'>Contacto</Link>
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;