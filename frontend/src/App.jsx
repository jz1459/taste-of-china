import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Menu from "./pages/Menu";
import Allday from "./components/Allday";
import Lunch from "./components/Lunch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route exact path='/' element={<Home />} />
                    <Route exact path = '/menu' element = {<Menu />} />
                    <Route exact path='/menu/allday' element={<Allday />} />
                    <Route exact path = '/menu/lunch' element = {<Lunch />} />
                    <Route exact path = '/contact' element = {<Contact />} />   
                </Routes>
            </div>
        </Router>
    );
};

export default App;