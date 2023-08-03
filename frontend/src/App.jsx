import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <Contact />
        </div>
    );
};

export default App;