import React from "react";
import PropTypes from "prop-types";
import "./FloorPlanPage.css";
import {Link} from "react-router-dom";

const FloorPlanPage = ({floor}) => {
  return (
    <div>
        <h2 className="model">{floor.name}</h2>
        <table className= "table">
          <tr>
            <th>Size</th>
            <th>Type</th>
            <th>unit</th>
            <th>Availability</th>
            <th>Enroll</th>
          </tr>
          <tr>
            <td>{floor.size}</td>
            <td>{floor.type}</td>
            <td>{floor.unit}</td>
            <td>{floor.Availability}</td>
            <td><Link to={`/apply/${floor.unit}`}> Apply</Link></td>
          </tr>   
        </table>
        <img className="img" src={floor.imgUrl}/>
    </div>
  );
};

FloorPlanPage.propTypes = {
  floor: PropTypes.array.isRequired,
};

export default FloorPlanPage;
