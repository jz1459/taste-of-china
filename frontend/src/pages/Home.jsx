import React from "react";
import { Container, Row} from "react-bootstrap";

function Home() {
    return (
         <section className="home" id="home">
            <Container>
                <Row>
                    <h1>Welcome To Taste of China</h1>
                    <p>Best Food, Great Value</p>
                    <a href="https://qmenu.us/#/taste-of-china-saratoga-springs/menu/1561447711869" target="_blank">Order Online</a>
                </Row>
            </Container>
        </section>
    );
};

export default Home;