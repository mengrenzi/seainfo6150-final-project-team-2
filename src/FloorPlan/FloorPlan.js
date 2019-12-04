import React from 'react';
import './FloorPlan.css';
import {Link} from "react-router-dom";

// used for floor plan image and content
const mockData = [
    {
        "imgUrl": "https://jacksonsquareliving.com/wp-content/uploads/2015/07/Jackson-Square-Floor-Plan-E-800.jpg",
        "model": "Model A",
        "size": "840 square feet",
        "type": "1 beds 1 bath",
        "Availability": "11/01/2019",
        "units": [ "310", "311", "312","410"]
    },
    {
        "imgUrl": "https://jacksonsquareliving.com/wp-content/uploads/2015/07/Jackson-Square-Floor-Plan-W-800.jpg",
        "model": "Model B",
        "size": "990 square feet",
        "type": "1 beds 1 bath",
        "Availability": "11/08/2019",
        "units": ["500", "501", "608", "612"]
    },
    {
        "imgUrl": "https://theoverlookonprospect.com/wp-content/uploads/2015/06/N-2-bed-1-bath-994.png",
        "model": "Model C",
        "size": "1000 square feet",
        "type": "2 beds 1 bath",
        "Availability": "11/20/2019",
        "units": [
            "212", "216", "314"
        ]
    },
    {
        "imgUrl": "https://theoverlookonprospect.com/wp-content/uploads/2015/06/O-2-bed-1-bath-1000.png",
        "model": "Model D",
        "size": "1,200 square feet",
        "type": "2 beds 2 bath",
        "Availability": "11/23/2019",
        "units": [
            "710", "712", "715"
        ]
    }
]



const FloorPlan = () => {
    let cnt = 0;
    return (
        <div>
            <div className = "content">
                <h2 className = "intro1">Floor Plan</h2>
                <h3 className = "intro2">
                    <i>With 4 different floor plans to choose from, Sitka offers thoughtfully designed homes 
                        that are perfect for friends, families, or just you.
                    </i>
                </h3>          

                <div className="floor-plan-section">
                    {mockData.map((data, index) => (
                        <div key={index} className="floor-plan-item">
                            <div>
                                <p><b>{data.model}</b></p>
                                <img className="floor-plan-img" src={data.imgUrl} alt="floor plan"/>
                                <p>{data.size}</p>
                                <p>{data.type}</p>
                                <div>
                                    <ul className="floorList">
                                    {
                                        data.units.map((unit, index) => {
                                        return (
                                            <li key={index}>
                                                <Link to={`/unit/${unit}`}>
                                                    {unit}
                                                </Link>
                                            </li>
                                        )
                                        })
                                    }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}


export default FloorPlan
