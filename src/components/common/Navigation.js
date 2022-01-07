import React from 'react'
import { Col, Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { PersonFill } from 'react-bootstrap-icons'
import logo from '../../assets/mermaidLogo.jpg'

export default function Navigation() {
    return (
        <Navbar bg="light"  expand="md" sticky="top">
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <img 
                            src={logo}
                            width="50"
                            className='d-inline-block align-top'
                            alt="Architect Your Dive Logo"
                        />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='float-right'/>
                <Container fluid>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Col>
                    <LinkContainer to="/single-dive">
                        <Nav.Link>Single Dive Calculator</Nav.Link>
                    </LinkContainer>
                    </Col>
                    <Col>
                    <LinkContainer to="/dive-planner">
                        <Nav.Link>Dive Planner</Nav.Link>
                    </LinkContainer>
                    </Col>
                    <Col>
                    <LinkContainer to="/commercial">
                        <Nav.Link>Commercial Planner</Nav.Link>
                    </LinkContainer>
                    </Col>
                    <Col>
                    <LinkContainer to="/user-dashboard">
                        <PersonFill  className="float-right" />
                    </LinkContainer>
                    </Col>
                </Navbar.Collapse>
                </Container>
            </Container>
        </Navbar>
    )
}
