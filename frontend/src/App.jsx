import React from "react";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
// import Menu from "./pages/Menu";
import Allday from "./components/Allday";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Home />
            <Allday />
            <Contact />
        </div>
    );
};

export default App;