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
    const url = "http://localhost:4000/api/allday";
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

    const Appetizers = fillData("appetizers");
    const Soup = fillData("soup");
    const FriedRice = fillData("fried-rice");
    const ChowMein = fillData("chow-mein");
    const ChopSuey = fillData("chop-suey");
    const SweetAndSour = fillData("sweet-&-sour");
    const EggFooYoung = fillData("egg-foo-young");
    const Curry = fillData("curry");
    const LoMein = fillData("lo-mein");
    const ChowFun = fillData("chow-fun");
    const Pork = fillData("pork");
    const Chicken = fillData("chicken");
    const Beef = fillData("beef");
    const Seafood = fillData("seafood");
    const SpecialRecs = fillData("special-recs");
    const HealthFood = fillData("health-food");
    const ChefsSpecial = fillData("chef's-special");
    const SpecialCombo = fillData("special-combo");
    const SideOrder = fillData("side-order");

    return (
        <section className="allday-menu">
            <Container>
                <div className="appetizers" id="appetizers">
                    <div className="sectionHeader">
                        <h1>Appetizers</h1>
                    </div>
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
                    <div className="sectionHeader">
                        <h1>Soups</h1>
                    </div>
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
                <div className="friedRice" id="friedRice">
                    <div className="sectionHeader">
                        <h1>Fried Rice</h1>
                    </div>
                    <Row>
                        {FriedRice.map(food =>
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
                <div className="chowMein" id="chowMein">
                    <div className="sectionHeader">
                        <h1>Chow Mein</h1>
                    </div>
                    <Row>
                        {ChowMein.map(food =>
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
                <div className="chopSuey" id="chopSuey">
                    <div className="sectionHeader">
                        <h1>Chop Suey</h1>
                    </div>
                    <Row>
                        {ChopSuey.map(food =>
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
                <div className="sweetAndSour" id="sweetAndSour">
                    <div className="sectionHeader">
                        <h1>Sweet And Sour</h1>
                    </div>
                    <Row>
                        {SweetAndSour.map(food =>
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
                <div className="eggFooYoung" id="eggFooYoung">
                    <div className="sectionHeader">
                        <h1>Egg Foo Young</h1>
                    </div>
                    <Row>
                        {EggFooYoung.map(food =>
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
                <div className="curry" id="curry">
                    <div className="sectionHeader">
                        <h1>Curry</h1>
                    </div>
                    <Row>
                        {Curry.map(food =>
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
                <div className="loMein" id="loMein">
                    <div className="sectionHeader">
                        <h1>Lo Mein</h1>
                    </div>
                    <Row>
                        {LoMein.map(food =>
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
                <div className="chowFun" id="chowFun">
                    <div className="sectionHeader">
                        <h1>Chow Fun or Mei Fun</h1>
                    </div>
                    <Row>
                        {ChowFun.map(food =>
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
                <div className="pork" id="pork">
                    <div className="sectionHeader">
                        <h1>Pork</h1>
                    </div>
                    <Row>
                        {Pork.map(food =>
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
                <div className="chicken" id="chicken">
                    <div className="sectionHeader">
                        <h1>Chicken</h1>
                    </div>
                    <Row>
                        {Chicken.map(food =>
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
                <div className="beef" id="beef">
                    <div className="sectionHeader">
                        <h1>Beef</h1>
                    </div>
                    <Row>
                        {Beef.map(food =>
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
                <div className="seafood" id="seafood">
                    <div className="sectionHeader">
                        <h1>Seafood</h1>
                    </div>
                    <Row>
                        {Seafood.map(food =>
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
                <div className="specialRecs" id="specialRecs">
                    <div className="sectionHeader">
                        <h1>Special Recommendations</h1>
                    </div>
                    <Row>
                        {SpecialRecs.map(food =>
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
                <div className="healthFood" id="healthFood">
                    <div className="sectionHeader">
                        <h1>Health Food Special</h1>
                    </div>
                    <Row>
                        {HealthFood.map(food =>
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
                <div className="chefsSpecial" id="chefsSpecial">
                    <div className="sectionHeader">
                        <h1>Chef's Special Suggestions</h1>
                    </div>
                    <Row>
                        {ChefsSpecial.map(food =>
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
                <div className="specialCombo" id="specialCombo">
                    <div className="sectionHeader">
                        <h1>Special Combination Plates</h1>
                    </div>
                    <Row>
                        {SpecialCombo.map(food =>
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
                <div className="sideOrder" id="sideOrder">
                    <div className="sectionHeader">
                        <h1>Side Orders</h1>
                    </div>
                    <Row>
                        {SideOrder.map(food =>
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