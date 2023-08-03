import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
    return (
        <section className="contact" id="contact">
            <Container>
                <div className="contact-bx">
                    <div className="section-header">
                        <Row>
                            <Col size={12}>
                                <h1>Contact Us</h1>
                            </Col>
                        </Row>
                        <Row className="align-items-center">
                            <Col size={8}>
                                <h1>Phone: (518) 583-0909</h1>
                                <h1>Address: 103 West Ave, Saratoga Springs, NY 12866</h1>
                                <a href="https://www.google.com/maps/dir//103+West+St,+Saratoga+Springs,+NY+12866/@43.0786176,-73.8879663,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89de38306cbb1511:0x2704c36c25a2a838!2m2!1d-73.8055656!2d43.0786472?entry=ttu" target="_blank">
                                    Open in Google Maps
                                </a>
                            </Col>
                            <Col size={8}>
                                <h1>Hours</h1>
                                <ul>
                                    <li>Monday: 10:30 AM - 9:30 PM </li>
                                    <li>Tuesday: 10:30 AM - 9:30 PM </li>
                                    <li>Wednesday: 10:30 AM - 9:30 PM </li>
                                    <li>Thursday: 10:30 AM - 9:30 PM </li>
                                    <li>Friday: 10:30 AM - 9:30 PM </li>
                                    <li>Saturday: 10:30 AM - 9:30 PM </li>
                                    <li>Sunday: Closed </li>
                                </ul>
                                <h1>Notable Holiday Hours</h1>
                                <ul>
                                    <li>Christmas</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;