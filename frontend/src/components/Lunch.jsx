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
        try {
            const res = await axios.get(url);
            setItems(res.data);
        } catch (error) {
            alert(error.response.data);
        }
    };
    console.log(items);
    return (
        <section className="lunch-menu">
            <Container>
                <div className="lunch" id="lunch">
                    <div className="sectionHeader">
                        <h1>Lunch Special</h1>
                    </div>
                    <Row>
                        {items.map(food =>
                            <Col size={4} >
                                <div className="foodName">
                                    <h2>{food.name}</h2>
                                </div>
                                <div className="foodPrice">
                                    <p>{food.price}</p>
                                </div>
                            </Col>
                        )}
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Lunch;