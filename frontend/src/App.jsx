import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Allday from "./components/Allday";
import Lunch from "./components/Lunch";
import Login from "./pages/Login";
import Edit from "./pages/Edit";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/menu-allday' element={<Allday />} />
                    <Route path='/menu-lunch' element={<Lunch />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/edit' element={<Edit />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;