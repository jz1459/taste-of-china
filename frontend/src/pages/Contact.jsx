import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
    const hoursUrl = "http://localhost:4000/api/hours";
    const holidaysUrl = "http://localhost:4000/api/holidays";

    const [hours, setHours] = useState([]);
    const [holidays, setHolidays] = useState([]);

    useEffect(() => {
        getHours();
        getHolidays();
    }, []);

    const getHours = async () => {
        const res = await axios.get(hoursUrl);
        setHours(res.data);
    };

    const getHolidays = async () => {
        const res = await axios.get(holidaysUrl);
        setHolidays(res.data);
    };

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
                                <h2><span className="contact-header">Phone:</span> <span>(518) 583-0909</span></h2>
                                <h2><span className="contact-header">Address:</span> <span>103 West Ave, Saratoga Springs, NY 12866</span></h2>
                            </Col>
                            <Col size={8}>
                                <h3>Hours</h3>
                                <ul>
                                    {hours.map(day =>
                                        <li>{day.day}: {day.hours}</li>
                                    )}
                                </ul>
                                
                                {/* <ul>
                                    <li>Monday: 10:30 AM - 9:30 PM </li>
                                    <li>Tuesday: 10:30 AM - 9:30 PM </li>
                                    <li>Wednesday: 10:30 AM - 9:30 PM </li>
                                    <li>Thursday: 10:30 AM - 9:30 PM </li>
                                    <li>Friday: 10:30 AM - 9:30 PM </li>
                                    <li>Saturday: 10:30 AM - 9:30 PM </li>
                                    <li>Sunday: Closed </li>
                                </ul> */}
                                <h3>Holiday Hours</h3>
                                <ul>
                                    {holidays.map(day =>
                                        <li>{day.day}: {day.hours}</li>
                                    )}
                                </ul>
                                {/* <ul>
                                    <li>Christmas</li>
                                </ul> */}
                            </Col>
                        </Row>
                        <Row>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11656.928835217395!2d-73.8180686393977!3d43.0786132447614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89de38306cbb1511%3A0x2704c36c25a2a838!2sTaste%20of%20CHINA!5e0!3m2!1sen!2sus!4v1691114539171!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Row>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;