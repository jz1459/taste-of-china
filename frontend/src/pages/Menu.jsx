import React from "react";


function Menu() {
    return (
        <section className="menu" id="menu">
            <div className="menu-navbar">
                <h1>Please Select a Menu</h1>
                <a href="/menu-lunch">Lunch</a>
                <a href="/menu-allday">All-day</a>
                <p>Menu & prices are subject to change without notice.</p>
            </div>
        </section>
    );
};

export default Menu;