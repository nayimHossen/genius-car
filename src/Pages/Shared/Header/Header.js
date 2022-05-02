import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'
import './Header.css';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleLogout = () => {
        signOut(auth);
    }

    return (
        <Navbar collapseOnSelect expand="lg" className='nav-style'>
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img style={{ height: "30px" }} src={logo} alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                        {
                            user && <>
                                <Nav.Link as={Link} to="/addService">AddService</Nav.Link>
                                <Nav.Link as={Link} to="/manage">Manage</Nav.Link>
                                <Nav.Link as={Link} to="/orders">Orders</Nav.Link>
                            </>
                        }
                        {
                            user
                                ?
                                <Nav.Link as={Link} to="" onClick={handleLogout}>Logout</Nav.Link>
                                :
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>

                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;