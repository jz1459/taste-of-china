import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

function Lunch() {
    const url = "http://localhost:4000/api/lunch";
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        getItems();
    }, []);

    const getItems = async () => {
        const res = await axios.get(url);
        setItems(res.data);
    };
    return (
        <section className="lunch-menu">
            <Container>
                <div className="lunch" id="lunch">
                    <div className="sectionHeader">
                        <h1>Lunch Special</h1>
                    </div>
                </div>
                <Row>
                    {items.map(item => {
                        <Col size={4} >
                            <div className="foodName">
                                <h2>{item.name}</h2>
                            </div>
                            <div className="foodPrice">
                                <p>{item.price}</p>
                            </div>
                        </Col>
                    })}
                </Row>
            </Container>
        </section>
    );
};

export default Lunch;