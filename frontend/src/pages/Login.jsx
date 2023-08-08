import React, { useState} from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const loginUrl = "http://localhost:4000/api/login";
    const navigate = useNavigate();

    const setHtmlStorage = (name, value, expires) => {
        const date = new Date();
        const schedule = Math.round((date.setSeconds(date.getSeconds() + expires)) / 1000);
        sessionStorage.setItem(name, value);
        sessionStorage.setItem(name + '_time', schedule);
    };

    const handleSubmit = async () => {
        try {
            const res = await axios.post(loginUrl, { username: userName, password: password });
            if (res.data.accessToken) {
                // localStorage.setItem("user", JSON.stringify(res.data))
                setHtmlStorage("user", JSON.stringify(res.data), 3600);
            }
            navigate('/edit');
        } catch (error) {
            alert(error.response.data);
        }
    };

    return (
        <section className="login" id="login">
            <Container>
                <Row>
                    <div className="section-header">
                        <h1>Admin Login</h1>
                    </div>
                </Row>
                <Row>
                    <div className="userName">
                        <input type="text" name="userName" placeholder="Username"
                            onChange={(event) => setUsername(event.target.value)} />
                    </div>
                    <div className="password">
                        <input type="password" name="password" placeholder="Password"
                            onChange={(event) => setPassword(event.target.value)} />
                    </div>
                    <div className="loginButton">
                        <button onClick={() => handleSubmit()}>Login</button>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default Login;
