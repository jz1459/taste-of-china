import React from "react";
import { Route } from "react-router-dom";


function Menu() {

    // Add in all the get requests via axios for every single category here
    // Basically preload everysingle one and hten have the navbar go to teh id
    return (
        <section className="menu" id="menu">
            <div className="menu-navbar">
                <Route path="/menu/allday"></Route>
                <Route path="/menu/lunch"></Route>
            </div>
        </section>
    );
};

export default Menu;