import React from 'react'
import { Facebook, Instagram, EnvelopeFill } from 'react-bootstrap-icons'
import { Container, Navbar, Col, Row } from 'react-bootstrap'

export default function Footer() {
    return (
        <Navbar bg="light" fixed="bottom">
            <Container className="m-0" fluid>
                <Col sm={5} className="align-self-start">
                    <Row className="justify-contents-start">
                        <h6 >Privacy Policy</h6>
                    </Row>
                    <Row className="float-left" style={{ maxWidth:500}}>
                        <p >Coral hogfish at Bursa trigger spot hogfish
                            bite yellow pseudochromis weasel shark seabass in angelfish
                        </p>
                    </Row>
                </Col>
                <Col sm={2} className="align-self-end">
                    <Row className="justify-content-center">
                        <h6>Contact Us</h6>
                    </Row>
                    <Row className="justify-content-around">
                        <Facebook />
                        <Instagram />
                        <EnvelopeFill />
                    </Row>
                </Col>
                <Col sm={5} className="align-self-end" >
                    <h6 className='float-right'>copyright 2021 all rights reserved</h6>
                </Col>
            </Container>
        </Navbar>
    )
}
