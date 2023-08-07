import React from "react";
import { Container } from "react-bootstrap";
function Footer() {
    return (
        <section className="footer" id="footer">
            <Container>
                <p>&copy; Taste of China. All Rights Reserved</p>
                <a href="/login">Admin Use Only</a>
            </Container>
        </section>
    );
};

export default Footer;