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
          <Route
            path="/contact"
            exact
            render={() => <Contact content={Contact} />}
          />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
