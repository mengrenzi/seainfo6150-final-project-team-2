import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

import Home from "./Home/Home.js";
import Amenities from "./Amentity/Amentity.js";
import Neighborhood from "./Neighborhood/Neighborhood.js";
import Contact from "./Contact/Contact.js";
import About from "./About/About";
import ViewAvailability from "./ViewAvailability/ViewAvailability";
import NotFound from "./NotFound/NotFound.js";
import Error from "./Error/Error.js";
import FloorPlan from "./FloorPlan/FloorPlan.js";
import FloorPlanPage from "./FloorPlanPage/FloorPlanPage.js";
import Apply from "./Apply/Apply.js";
import ThankYou from "./Apply/ThankYou.js";
import Jason from "./About/Jason.js";
import Lobby from "./Amentity/Lobby.js";
import ClubRoom from "./Amentity/ClubRoom.js";
import Fitness from "./Amentity/Fitness.js";
import Garden from "./Amentity/Garden.js";
import TreeHouse from "./Amentity/TreeHouse.js";
import Leina from "./About/Leina.js";
import Monica from "./About/Monica.js";
import Joy from "./About/Joy.js";

// data
import floor from "./data/apartments.json";

const externalContent = {
  id: "article-1",
  title: "An Article",
  author: "April Bingham",
  text: "Some text in the article"
};

function App() {
  return (
    <Router>
      <div className="main-app">
        <header>
          <div>
            {/* [TODO]: update logo img */}
            <img className="logo" alt="" width="60" height="60" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQciQt8qiDSJoJA2RUfJXI9BcHLDFp4HK85n6okO9Nn8vZ5sOK1Mw&s" />
            {/* Nav bar */}
            <nav className="nav-bar">
              <Link to="/">Home</Link>
              <Link to="/floor-plan">Floor Plan</Link>
              <Link to="/ViewAvailability">View Availability</Link>
              <Link to="/amenities">Amenities</Link>
              <Link to="/neighborhood">Neighborhood</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About</Link>
            </nav>
          </div>
        </header>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/floor-plan" exact component={FloorPlan}/>
          <Route path="/ViewAvailability" exact component={ViewAvailability}/>
          <Route path="/amenities" exact component={Amenities} />
          <Route path="/neighborhood" exact component={Neighborhood} />
          <Route path="/about" exact component={About} />
          <Route path="/thankyou" exact component={ThankYou} />
          <Route
            path="/contact"
            exact
            render={() => <Contact content={Contact} />}
          />
          <Route
            path="/unit/:unit"
            exact
            render={({ match }) => (
              <FloorPlanPage
                floor={
                  floor.filter(
                    floor => floor.unit === match.params.unit
                  )[0]
                }
              />
            )}
          />
          <Route
            path="/apply/:unit"
            exact
            render={({ match }) => (
              <Apply
                floor={
                  floor.filter(
                    floor => floor.unit === match.params.unit
                  )[0]
                }
              />
            )}
          />
          <Route path="/about" exact component={About} />
          <Route path="/about/jason" exact component = {Jason} />
          <Route path="/about/Leina" exact component = {Leina} />
          <Route path="/about/Monica" exact component = {Monica} />
          <Route path="/about/Joy" exact component = {Joy} />
          <Route path="/Amentity/lobby" exact component = {Lobby} />
          <Route path="/Amentity/ClubRoom" exact component = {ClubRoom} />
          <Route path="/Amentity/Fitness" exact component = {Fitness} />
          <Route path="/Amentity/Garden" exact component = {Garden} />
          <Route path="/Amentity/TreeHouse" exact component = {TreeHouse} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;