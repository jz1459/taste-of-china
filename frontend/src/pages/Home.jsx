import React from "react";
import { Container, Row } from "react-bootstrap";
import ChineseFood from "../assets/chineseFood.jpg";


function Home() {
    return (
        <section className="home" id="home">
            <Container>
                <img className="backgroundImg" src={ChineseFood} alt = "Chinese Food"/>
                <Row>
                    <h1>Welcome To Taste of China</h1>
                </Row>
                <Row>
                    <p>Best Food, Great Value</p>
                </Row>
                <Row>
                    <span className="onlineMenu">
                        <a href="https://qmenu.us/#/taste-of-china-saratoga-springs/menu/1561447711869" target="_blank">Order Online</a>
                    </span>
                </Row>
            </Container>
        </section>
    );
};

export default Home;