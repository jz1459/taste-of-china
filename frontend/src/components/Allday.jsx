// have all the get requests here
// then have a navbar at the top for the dropdowns (chow mein, fried rice etc.)
// then have the items.map for everysing.e one with different getters and setters and useeffects
// have a singular getRequest
// then filter each into the 19 seperate food categories
// then set as normal

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col} from "react-bootstrap";

function Allday() {
    const url = "http://localhost:4000/";
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        getItems();
    }, []);

    const getItems = async () => {
        const res = await axios.get(url);
        setItems(res.data);
    };

    const fillData = (tag) => {
        return items.filter(item => item.category === tag);
    };

    console.log(items);
    const Appetizers = fillData("appetizers");
    const Soup = fillData("soup");
    console.log(Appetizers);
    console.log(Soup);
    // const FriedRice = fillData("fried-rice");
    // const ChowMein = fillData("chow-mein");
    // const ChopSuey = fillData("chop-suey");
    // const SweetAndSour = [];
    // const EggFooYoung = [];
    // const Curry = [];
    // const LoMein = [];
    // const ChowFun = [];
    // const Pork = [];
    // const Chicken = [];
    // const Beef = [];
    // const Seafood = [];
    // const SpecialRecs = [];
    // const HealthFood = [];
    // const ChefsSpecial = [];
    // const SpecialCombo = [];
    // const SideOrder = [];

    return (
        <section className="allday-menu">
            <Container>
                <div className="appetizers" id="appetizers">
                    <Row>
                        {Appetizers.map(food =>
                            <Col size={4}>
                                <div className="foodName">
                                    <h2>{food.name}</h2>
                                    {/* {console.log(Appetizers.name)} */}
                                </div>
                                <div className="foodPrice">
                                    <p>{food.price}</p>
                                </div>
                            </Col>
                        )}
                    </Row>
                </div>
                <div className="soup" id="soup">
                    <Row>
                        {Soup.map(food =>
                            <Col size={4}>
                                <div className="foodName">
                                    <h2>{food.name}</h2>
                                </div>
                                <div className="foodPrice">
                                    <p>{food.price}</p>
                                </div>
                            </Col>
                        )}
                    </Row>
                </div>
            </Container>
        </section>
    );
};

export default Allday;