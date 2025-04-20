import "./css/Plant.css";
import React, {useState} from "react";


function Plant(props) {
    return(
        <section className="house-plan">
            <section className="feature-image">
                <img src={"https://landscaping-backend.onrender.com/images/" + props.main_image} alt={props.name}
                 />
            </section>
            <section className="info">
                <h2>{props.name}</h2>
                <p>Description: {props.description}</p>
                <p>Price: ${props.price}</p>
                <p>Rating: {props.rating}/5</p>
                
            </section>
            
        </section>
    );
};

export default Plant;