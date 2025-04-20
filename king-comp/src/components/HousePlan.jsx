import "./css/HousePlan.css";
import React, {useState} from "react";
import EditHousePlan from "./EditHousePlan";
import DeleteHousePlan from "./DeleteHousePlan";

function HousePlan(props) {
    const [housePlan, setHousePlan] = useState(props);
    const [showEditDialog, setShowEditDialog] = useState(false);
    const [showDeleteDialog, setShowDeleteDialog] = useState(false);
    const [showHousePlan, setShowHousePlan] = useState(true);
  
    const openEditDialog = () => {
      setShowEditDialog(true);
    };
  
    const closeEditDialog = () => {
      setShowEditDialog(false);
    };
  
    const openDeleteDialog = () => {
      setShowDeleteDialog(true);
    };
  
    const closeDeleteDialog = () => {
      setShowDeleteDialog(false);
    };
  
    const hideHousePlan = () => {
      setShowHousePlan(false);
    };
  
    const editHousePlan = (house) => {
      setHousePlan(house);
    };


    return(
        <>
      {showHousePlan?(
        <div>
            {showDeleteDialog?(
              <DeleteHousePlan
              name={housePlan.name}
              _id={housePlan._id}
              closeDeleteDialog = {closeDeleteDialog}
              hideHousePlan = {hideHousePlan}
            />
            ):("")}
            
            {showEditDialog?(
               <EditHousePlan
               _id={housePlan._id}
               name={housePlan.name}
               description={housePlan.description}
               main_image={housePlan.main_image}
               price={housePlan.price}
               rating={housePlan.rating}
               closeEditDialog = {closeEditDialog}
               editHousePlan = {editHousePlan}
             />
            ):("")}
           

          <section className="house-plan">
            <section className="feature-image">
              <img
                src={"https://landscaping-backend.onrender.com/images/" + housePlan.main_image}
                alt={housePlan.name}
              />
            </section>
            <section className="info">
              <header className="columns">
                <h3>{housePlan.name}</h3>
                <section id="change-buttons">
                  <a href="#" onClick={openEditDialog} >
                    &#9998;
                  </a>
                  <a href="#" onClick={openDeleteDialog}>
                    &#x2715;
                  </a>
                </section>
              </header>

              <p>Description: {housePlan.description}</p>
              <p>Price:$ {housePlan.price}</p>
              <p>Rating: {housePlan.rating}/5</p>
            </section>
          </section>
        </div>
      ):("")}
            {/*
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
            */}
        </>
    );
};

export default HousePlan;