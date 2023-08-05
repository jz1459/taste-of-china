import React, {useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";

function Edit() {
    const navigate = useNavigate();

    useEffect(() => {
        const isLoggedIn = window.localStorage.getItem('user');
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, []);

    const handleLogOut = () => {
        localStorage.removeItem("user");
        navigate('/login');
    }


    return (
        // Put in the axios routing for the reamining CUD operations for lunch, holiday, hours, allday schemas
        <section className="edit" id="edit">
            <Container>
                <Row>
                    <Col size={8}>
                        <h1>Edit Website</h1>
                    </Col>
                    <Col size={4} >
                        <button onClick={() => handleLogOut()}>Logout</button>
                    </Col>
                </Row>
                <div className="editHeader">
                    <h1>Edit All-day Menu</h1>
                </div>
                <div className="editHeader">
                    <h1>Edit Lunch Menu</h1>
                </div>
                <div className="editHeader">
                    <h1>Edit Hours</h1>
                </div>
                <div className="editHeader">
                    <h1>Edit Holidays</h1>
                </div>
            </Container>
        </section>
    );
};

export default Edit;