import React from 'react';
import './ViewAvailability.css';
import {Link} from "react-router-dom";

// used for floor plan image and content
const mockData = [
    {
        "imgUrl": "https://jacksonsquareliving.com/wp-content/uploads/2015/07/Jackson-Square-Floor-Plan-E-800.jpg",
        "unit": "310",
        "size": "840 square feet",
        "type": "1 beds 1 bath",
        "Availability": "11/01/2019"
    },
    {
        "imgUrl": "https://jacksonsquareliving.com/wp-content/uploads/2015/07/Jackson-Square-Floor-Plan-W-800.jpg",
        "unit": "410",
        "size": "990 square feet",
        "type": "1 beds 1 bath",
        "Availability": "11/08/2019"
    },
    {
        "imgUrl": "https://theoverlookonprospect.com/wp-content/uploads/2015/06/N-2-bed-1-bath-994.png",
        "unit": "212",
        "size": "1000 square feet",
        "type": "2 beds 1 bath",
        "Availability": "11/20/2019"
    },
    {
        "imgUrl": "https://theoverlookonprospect.com/wp-content/uploads/2015/06/O-2-bed-1-bath-1000.png",
        "unit": "715",
        "size": "1,200 square feet",
        "type": "2 beds 2 bath",
        "Availability": "11/23/2019"
    }
]

const ViewAvailability = () => {
  return (
    <div className = "container">
        <div className = "content">
            <h2 className = "title">View Availability</h2>
            <p>With over 3 different floor plans to choose from,  Sitka offers thoughtfully designed homes that are perfect for friends, families, or just you.</p>
        </div>

        <table className= "table">
            <thead className="thead-dark">
                <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Size</th>
                <th scope="col">Type</th>
                <th scope="col">Availability</th>
                </tr>
            </thead>
            <tbody>
                {mockData.map((data, index) => (
                    <tr key={index}>
                        <th scope="row">
                            <Link to={"/unit/" + data.unit}>
                            <img className="view-availability-img" src={data.imgUrl} alt="View Availability"/>
                            </Link>
                        </th>
                        <td>{data.unit}</td>
                        <td>{data.size}</td>
                        <td>{data.type}</td>
                        <td>{data.Availability}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
 )
}

export default ViewAvailability;
