import React from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';

function NavBar() {
    return (
        // <Router>
        <Navbar expand="md">
            <Container>
                <Navbar.Brand href="#home">
                    <p>Taste of China</p>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" id='homeLink' className="navbar-link">Home</Nav.Link>
                        <div className="sub-menu">
                            <Nav.Link href="/menu" id='aboutLink' className="navbar-link">Menu</Nav.Link>
                            <div className="sub-menu-content">
                                <Nav.Link href="/menu/lunch" id='lunchLink' className="navbar-link">Lunch</Nav.Link>
                                <Nav.Link href="/menu/allday" id='allDayLink' className="navbar-link">All-Day</Nav.Link>
                            </div>
                        </div>
                        <Nav.Link href="https://qmenu.us/#/taste-of-china-saratoga-springs/menu/1561447711869" target="_blank" id='orderLink' className="navbar-link">Order</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        {/* <div className="social-icon">
                                <a href="https://www.linkedin.com/in/jz1459/" target="_blank"><img src={LinkedIn} alt="LinkedIn" /></a>
                            </div> */}
                        <HashLink to='/contact'>
                            <button><span>Contact Us</span></button>
                        </HashLink>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // </Router>
    );
};

export default NavBar;