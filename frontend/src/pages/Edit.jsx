// put the CUD operations here after being successfully authenticated
import React, {useState, useEffect} from "react";
import { useNavigate } from 'react-router-dom';

function Edit() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const isLoggedIn = window.localStorage.getItem('user');
        if (!isLoggedIn) {
            setLoggedIn(false);
            navigate('/login');
        }
    }, []);

    const handleLogOut = () => {
        localStorage.removeItem("user");
        setLoggedIn(false);
        navigate('/login');
    }

    return (
        <section className="edit" id="edit">
            <h1>Edit</h1>
            <button onClick={() => handleLogOut()}>Logout</button>
        </section>
    );
};

export default Edit;