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
    const [holidayName, setHolidayName] = useState("");
    const [holidayHours, setHolidayHours] = useState("");

    // Routing for the updating, creating and deleting
    const createFood = async (foodName, foodPrice, foodCategory) => {
        try {
            const res = await axios.post(foodUrl, { foodName, foodPrice, foodCategory }, { headers: authHeader() });
            setFoodName("");
            setFoodPrice("");
            setFoodCategory("");
            if (res.status === 200 && res.data) {
                alert("Successfully added:  Name: " + JSON.stringify(res.data.name) + " Price: " + JSON.stringify(res.data.price) + " Category: " + JSON.stringify(res.data.category));
            } else {
                alert("Didn't work, check your spelling.");
            }
        } catch (error) {
            setFoodName("");
            setFoodPrice("");
            setFoodCategory("");
            alert(error.response.data);
        }
    };

    const updateFood = async (foodName, foodPrice) => {
        try {
            const res = await axios.put(foodUrl, { foodName, foodPrice }, { headers: authHeader() });
            setFoodName("");
            setFoodPrice("");
            setFoodCategory("");
            if (res.status === 200 && res.data) {
                alert("Successfully updated:  Name: " + JSON.stringify(res.data.name) + " Price: " + JSON.stringify(res.data.price) + " Category: " + JSON.stringify(res.data.category));
            } else {
                alert("Didn't work, check your spelling.");
            }
        } catch (error) {
            setFoodName("");
            setFoodPrice("");
            setFoodCategory("");
            alert(error.response.data);
        }
    };

    const deleteFood = async (foodName) => {
        try {
            const res = await axios.delete(foodUrl, { data: { foodName }, headers: authHeader() });
            setFoodName("");
            setFoodPrice("");
            setFoodCategory("");
            if (res.status === 200 && res.data) {
                alert("Successfully deleted:  Name: " + JSON.stringify(res.data.name) + " Price: " + JSON.stringify(res.data.price) + " Category: " + JSON.stringify(res.data.category));
            } else {
                alert("Didn't work, check your spelling.");
            }
        } catch (error) {
            setFoodName("");
            setFoodPrice("");
            setFoodCategory("");
            alert(error.response.data);
        }
    };

    const createLunch = async (lunchName, lunchPrice) => {
        try {
            const res = await axios.post(lunchUrl, { lunchName, lunchPrice }, { headers: authHeader() });
            setLunchName("");
            setLunchPrice("");
            if (res.status === 200 && res.data) {
                alert("Successfully added:  Name: " + JSON.stringify(res.data.name) + " Price: " + JSON.stringify(res.data.price));
            } else {
                alert("Didn't work, check your spelling.");
            }
        } catch (error) {
            setLunchName("");
            setLunchPrice("");
            alert(error.response.data);
        }
    };

    const updateLunch = async (lunchName, lunchPrice) => {
        try {
            const res = await axios.put(lunchUrl, { lunchName, lunchPrice }, { headers: authHeader() });
            setLunchName("");
            setLunchPrice("");
            if (res.status === 200 && res.data) {
                alert("Successfully updated:  Name: " + JSON.stringify(res.data.name) + " Price: " + JSON.stringify(res.data.price));
            } else {
                alert("Didn't work, check your spelling.");
            }
        } catch (error) {
            setLunchName("");
            setLunchPrice("");
            alert(error.response.data);
        }
    };

    const deleteLunch = async (lunchName) => {
        try {
            const res = await axios.delete(lunchUrl, { data: { lunchName }, headers: authHeader() });
            setLunchName("");
            setLunchPrice("");
            if (res.status === 200 && res.data) {
                alert("Successfully deleted:  Name: " + JSON.stringify(res.data.name) + " Price: " + JSON.stringify(res.data.price));
            } else {
                alert("Didn't work, check your spelling.");
            }
        } catch (error) {
            setLunchName("");
            setLunchPrice("");
            alert(error.response.data);
        }
    };

    const createHours = async (dayName, hours) => {
        try {
            const res = await axios.post(hoursUrl, { dayName, hours }, { headers: authHeader() });
            setDayName("");
            setHours("");
            if (res.status === 200 && res.data) {
                alert("Successfully added:  Days: " + JSON.stringify(res.data.day) + " Time: " + JSON.stringify(res.data.hours));
            } else {
                alert("Didn't work, check your spelling.");
            }
        } catch (error) {
            setDayName("");
            setHours("");
            alert(error.response.data);
        }
    };

    const updateHours = async (dayName, hours) => {
        try {
            const res = await axios.put(hoursUrl, { dayName, hours }, { headers: authHeader() });
            setDayName("");
            setHours("");
            if (res.status === 200 && res.data) {
                alert("Successfully updated:  Days: " + JSON.stringify(res.data.day) + " Time: " + JSON.stringify(res.data.hours));
            } else {
                alert("Didn't work, check your spelling.");
            }
        } catch (error) {
            setDayName("");
            setHours("");
            alert(error.response.data);
        }
    };

    const deleteHours = async (dayName) => {
        try {
            const res = await axios.delete(hoursUrl, { data: { dayName }, headers: authHeader() });
            setDayName("");
            setHours("");
            if (res.status === 200 && res.data) {
                alert("Successfully deleted:  Days: " + JSON.stringify(res.data.day) + " Time: " + JSON.stringify(res.data.hours));
            } else {
                alert("Didn't work, check your spelling.");
            }
        } catch (error) {
            setDayName("");
            setHours("");
            alert(error.response.data);
        }
    };

    const createHoliday = async (holidayName, holidayHours) => {
        try {
            const res = await axios.post(holidaysUrl, { holidayName, holidayHours }, { headers: authHeader() });
            setHolidayName("");
            setHolidayHours("");
            if (res.status === 200 && res.data) {
                alert("Successfully added:  Holiday: " + JSON.stringify(res.data.day) + " Time: " + JSON.stringify(res.data.hours));
            } else {
                alert("Didn't work, check your spelling.");
            }
        } catch (error) {
            setHolidayName("");
            setHolidayHours("");
            alert(error.response.data);
        }
    };

    const updateHoliday = async (holidayName, holidayHours) => {
        try {
            const res = await axios.put(holidaysUrl, { holidayName, holidayHours }, { headers: authHeader() });
            setHolidayName("");
            setHolidayHours("");
            if (res.status === 200 && res.data) {
                alert("Successfully updated:  Holiday: " + JSON.stringify(res.data.day) + " Time: " + JSON.stringify(res.data.hours));
            } else {
                alert("Didn't work, check your spelling.");
            }
        } catch (error) {
            setHolidayName("");
            setHolidayHours("");
            alert(error.response.data);
        }
    };

    const deleteHoliday = async (holidayName) => {
        try {
            const res = await axios.delete(holidaysUrl, { data: { holidayName }, headers: authHeader() });
            setHolidayName("");
            setHolidayHours("");
            if (res.status === 200 && res.data) {
                alert("Successfully deleted:  Holiday: " + JSON.stringify(res.data.day) + " Time: " + JSON.stringify(res.data.hours));
            } else {
                alert("Didn't work, check your spelling.");
            }
        } catch (error) {
            setHolidayName("");
            setHolidayHours("");
            alert(error.response.data);
        }
    };

    return (
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
                    <input type="text" placeholder="Food Name" value={lunchName} onChange={(event) => setLunchName(event.target.value)} />
                    <input type="text" placeholder="Food Price" value={lunchPrice} onChange={(event) => setLunchPrice(event.target.value)} />
                    <button onClick={() => createLunch(lunchName, lunchPrice)}>Create New Food</button>
                    <button onClick={() => updateLunch(lunchName, lunchPrice)}>Update Food Price</button>
                    <button onClick={()=> deleteLunch(lunchName)}>Delete Food</button>
                </div>
                <div className="editHeader">
                    <h1>Edit Hours</h1>
                    <input type="text" placeholder="Day" value={dayName} onChange={(event) => setDayName(event.target.value)} />
                    <input type="text" placeholder="Time" value={hours} onChange={(event) => setHours(event.target.value)} />
                    <button onClick={() => createHours(dayName, hours)}>Add New Times</button>
                    <button onClick={() => updateHours(dayName, hours)}>Update Times</button>
                    <button onClick={()=> deleteHours(dayName)}>Delete Times</button>
                </div>
                <div className="editHeader">
                    <h1>Edit Holidays</h1>
                    <input type="text" placeholder="Holiday" value={holidayName} onChange={(event) => setHolidayName(event.target.value)} />
                    <input type="text" placeholder="Time" value={holidayHours} onChange={(event) => setHolidayHours(event.target.value)} />
                    <button onClick={() => createHoliday(holidayName, holidayHours)}>Add New Holiday</button>
                    <button onClick={() => updateHoliday(holidayName, holidayHours)}>Update Holiday</button>
                    <button onClick={()=> deleteHoliday(holidayName)}>Delete Holiday</button>
                </div>
            </Container>
        </section>
    );
};

export default Edit;