import React from "react";


function Menu() {

    // Add in all the get requests via axios for every single category here
    // Basically preload everysingle one and hten have the navbar go to teh id
    return (
        <section className="menu" id="menu">
            <div className="menu-navbar">
                <h1>Please Select a Menu</h1>
                <a href="/menu/lunch">Lunch</a>
                <a href="/menu/allday">All-day</a>
                <p>Menu & prices are subject to change without notice.</p>
            </div>
        </section>
    );
};

export default Menu;