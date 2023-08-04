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
                                <h1>Phone: (518) 583-0909</h1>
                                <h1>Address: 103 West Ave, Saratoga Springs, NY 12866</h1>
                                <a href="https://www.google.com/maps/dir//103+West+St,+Saratoga+Springs,+NY+12866/@43.0786176,-73.8879663,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89de38306cbb1511:0x2704c36c25a2a838!2m2!1d-73.8055656!2d43.0786472?entry=ttu" target="_blank">
                                    Open in Google Maps
                                </a>
                            </Col>
                            <Col size={8}>
                                <h1>Hours</h1>
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
                                <h1>Holiday Hours</h1>
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