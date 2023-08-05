import React, { useState} from "react";
import { Container, Row } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const loginUrl = "http://localhost:4000/api/login";
    const navigate = useNavigate();


    const handleSubmit = async () => {
        const res = await axios.post(loginUrl, { username: userName, password: password });
        if (res.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(res.data))
        }
        navigate('/edit');
    }

    return (
        <section className="login" id="login">
            <Container>
                <Row>
                    <h1>Login</h1>
                </Row>
                <Row>
                    <div className="userName">
                        <input type="userName" name="userName" placeholder="Username"
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
