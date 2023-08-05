import React, {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";

function Edit() {
    // Handle Authentication and Authorization
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
    };

    const authHeader = () => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.accessToken) {
            return { "Authorization": "Bearer " + user.accessToken };
        } else {
            return {};
        }
    };

    // Code to handle updating, creating and deleting database items
    const foodUrl = "http://localhost:4000/api/edit/all-day";
    const lunchUrl = "http://localhost:4000/api/edit/lunch";
    const hoursUrl = "http://localhost:4000/api/edit/hours";
    const holidaysUrl = "http://localhost:4000/api/edit/holidays";
    const [foodName, setFoodName] = useState("");
    const [foodPrice, setFoodPrice] = useState("");
    const [foodCategory, setFoodCategory] = useState("");
    const [lunchName, setLunchName] = useState("");
    const [lunchPrice, setLunchPrice] = useState("");
    const [dayName, setDayName] = useState("");
    const [hours, setHours] = useState("");
    const [holidays, setHolidays] = useState("");
    const [holidayHours, setHolidayHours] = useState("");

    // Routing for the updating, creating and deleting
    const createFood = async (foodName, foodPrice, foodCategory) => {
        // put in a paremeter that tells us which route to use so we can refactor our code
        const res = await axios.post(foodUrl, { foodName, foodPrice, foodCategory }, {headers: authHeader()});
        setFoodName("");
        setFoodPrice("");
        setFoodCategory("");
        if (res.status == 200) {
            alert("Successfully added: " + "Name: " + JSON.stringify(res.data.name) + " Price: " + JSON.stringify(res.data.price) + " Category: " + JSON.stringify(res.data.category));
        } else {
            alert("Didn't work, check your spelling.");
        }
    };

    const updateFood = async (foodName, foodPrice) => {
        const res = await axios.put(foodUrl, { foodName, foodPrice }, {headers: authHeader()});
        setFoodName("");
        setFoodPrice("");
        if (res.status === 200 && res.data) {
            alert("Successfully updated: " + "Name: " + JSON.stringify(res.data.name) + " Price: " + JSON.stringify(res.data.price) + " Category: " + JSON.stringify(res.data.category));
        } else {
            alert("Didn't work, check your spelling.");
        }
    };

    const deleteFood = async (foodName) => {
        const res = await axios.delete(foodUrl, { data: { foodName },  headers: authHeader()});
        setFoodName("");
        console.log(res);
        if (res.status == 200 && res.data) {
            alert("Successfully deleted: " + "Name: " + JSON.stringify(res.data.name) + " Price: " + JSON.stringify(res.data.price) + " Category: " + JSON.stringify(res.data.category));
        } else {
            alert("Didn't work, check your spelling.");
        }
    };

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
                    <input type="text" placeholder="Food Name" value={foodName} onChange={(event) => setFoodName(event.target.value)} />
                    <input type="text" placeholder="Food Price" value={foodPrice} onChange={(event) => setFoodPrice(event.target.value)} />
                    <input type="text" placeholder="Food Category" value={foodCategory} onChange={(event) => setFoodCategory(event.target.value)} />
                    <button onClick={() => createFood(foodName, foodPrice, foodCategory)}>Create New Food</button>
                    <button onClick={() => updateFood(foodName, foodPrice)}>Update Food Price</button>
                    <button onClick={()=> deleteFood(foodName)}>Delete Food</button>
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