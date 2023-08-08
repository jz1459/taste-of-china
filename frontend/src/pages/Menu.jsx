import React from "react";
import { Container } from "react-bootstrap";

function Menu() {
    return (
        <section className="menu" id="menu">
            <Container>
                <div className="section-header">
                    <h1>Menu</h1>
                </div>
                <div className="menu-navbar">
                    <h1>Please Select a Menu</h1>
                    <a href="/menu-lunch">Lunch Menu</a>
                    <a href="/menu-allday">All-day Menu</a>
                    <p>*Menu and prices are subject to change without notice. Consuming raw and undercooked meat, poultry, seafood, shellfish or eggs may increase risk of foodborne illness.</p>
                </div>
            </Container>
        </section>
    );
};

export default Menu;