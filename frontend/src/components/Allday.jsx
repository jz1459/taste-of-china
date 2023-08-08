import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Navbar, Nav} from "react-bootstrap";

function Allday() {
    const url = "http://localhost:4000/api/allday";
    const [items, setItems] = useState([]);
    
    useEffect(() => {
        getItems();
    }, []);

    const getItems = async () => {
        try {
            const res = await axios.get(url);
            setItems(res.data);
        } catch (error) {
            alert(error.response.data);
        }
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
            {/* <div className="menuNavigation" id = "menuNavigation">
                <Navbar expand="md">
                    <Navbar.Brand href="/menu-allday">
                        <p>All-day Menu</p>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#appetizers" id='appetizersLink' className="navbar-link">Appetizers</Nav.Link>
                        <Nav.Link href="#soup" id='soupLink' className="navbar-link">Soup</Nav.Link>
                        <Nav.Link href="#friedRice" id='friedRiceLink' className="navbar-link">Fried Rice</Nav.Link>
                        <Nav.Link href="#chowMein" id='chowMeinLink' className="navbar-link">Chow Mein</Nav.Link>
                        <Nav.Link href="#chopSuey" id='chopSueyLink' className="navbar-link">Chop Suey</Nav.Link>
                        <Nav.Link href="#sweetAndSour" id='sweetAndSourLink' className="navbar-link">Sweet And Sour</Nav.Link>
                        <Nav.Link href="#eggFooYoung" id='eggFooYoungLink' className="navbar-link">Egg Foo Young</Nav.Link>
                        <Nav.Link href="#curry" id='curryLink' className="navbar-link">Curry</Nav.Link>
                        <Nav.Link href="#loMein" id='loMeinLink' className="navbar-link">Lo Mein</Nav.Link>
                        <Nav.Link href="#chowFun" id='chowFunLink' className="navbar-link">Chow Fun</Nav.Link>
                        <Nav.Link href="#pork" id='porkLink' className="navbar-link">Pork</Nav.Link>
                        <Nav.Link href="#chicken" id='chickenLink' className="navbar-link">Chicken</Nav.Link>
                        <Nav.Link href="#beef" id='beefLink' className="navbar-link">Beef</Nav.Link>
                        <Nav.Link href="#seafood" id='seafoodLink' className="navbar-link">Seafood</Nav.Link>
                        <Nav.Link href="#specialRecs" id='specialRecsLink' className="navbar-link">Special Recommendations</Nav.Link>
                        <Nav.Link href="#healthFood" id='healthFoodLink' className="navbar-link">Health Food Special</Nav.Link>
                        <Nav.Link href="#chefsSpecial" id='chefsSpecialLink' className="navbar-link">Chef's Specials</Nav.Link>
                        <Nav.Link href="#specialCombo" id='specialComboLink' className="navbar-link">Special Combination Plates</Nav.Link>
                        <Nav.Link href="#sideOrder" id='sideOrderLink' className="navbar-link">Side Orders</Nav.Link>
                    </Nav>
                </Navbar>
            </div> */}
            <div className="all-day-top" id="all-day-top"></div>
            <Container>
                <div className="section-header" id = "all-dayHeader">
                    <h1>All-Day Menu</h1>
                </div>
                <div className="appetizers" id="appetizers">
                    <div className="sectionHeader">
                        <h1>Appetizers</h1>
                    </div>
                    <Row>
                        {Appetizers.map(food =>
                            <Col xl={4}>
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
                <div className="soup" id="soup">
                    <div className="sectionHeader">
                        <h1>Soups</h1>
                        <p>With Crispy Noodles</p>
                    </div>
                    <Row>
                        {Soup.map(food =>
                            <Col xl={4}>
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
                            <Col xl={4}>
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
                        <p>With Rice and Crispy Noodles</p>
                    </div>
                    <Row>
                        {ChowMein.map(food =>
                            <Col xl={4}>
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
                        <p>With Rice</p>
                    </div>
                    <Row>
                        {ChopSuey.map(food =>
                            <Col xl={4}>
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
                        <p>With Rice</p>
                    </div>
                    <Row>
                        {SweetAndSour.map(food =>
                            <Col xl={4}>
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
                        <p>With Rice</p>
                    </div>
                    <Row>
                        {EggFooYoung.map(food =>
                            <Col xl={4}>
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
                        <p>With Rice</p>
                    </div>
                    <Row>
                        {Curry.map(food =>
                            <Col xl={4}>
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
                        <p>Soft Noodles</p>
                    </div>
                    <Row>
                        {LoMein.map(food =>
                            <Col xl={4}>
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
                        <p>Rice Noodles</p>
                    </div>
                    <Row>
                        {ChowFun.map(food =>
                            <Col xl={4}>
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
                        <p>With Rice</p>
                    </div>
                    <Row>
                        {Pork.map(food =>
                            <Col xl={4}>
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
                        <p>With Rice</p>
                    </div>
                    <Row>
                        {Chicken.map(food =>
                            <Col xl={4}>
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
                        <p>With Rice</p>
                    </div>
                    <Row>
                        {Beef.map(food =>
                            <Col xl={4}>
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
                        <p>With Rice</p>
                    </div>
                    <Row>
                        {Seafood.map(food =>
                            <Col xl={4}>
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
                        <p>Szechuan, Hunan, and Cantonese Style Dishes with Rice</p>
                    </div>
                    <Row>
                        {SpecialRecs.map(food =>
                            <Col xl={4}>
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
                            <Col xl={4}>
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
                        <p>With White Rice</p>
                    </div>
                    <Row>
                        {ChefsSpecial.map(food =>
                            <Col xl={4}>
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
                        <p>Each Order Comes With Roast Pork Fried Rice and an Egg Roll</p>
                    </div>
                    <Row>
                        {SpecialCombo.map(food =>
                            <Col xl={4}>
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
                            <Col xl={4}>
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
                <div className="go-top"><a href="#all-day-top"><i className="bi bi-arrow-up-circle-fill"></i></a></div>
            </Container>
        </section>
    );
};

export default Allday;