import {useState, useEffect} from "react";
import axios from "axios";
import HousePlan from "./HousePlan";
import "./css/HousePlans.css";
import AddHousePlan from "./AddHousePlan";

const HousePlans = () => {
    const [houses, setHouses] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    //after page loaded to async json retrieval
    useEffect(()=>{
        //automatically execute the async function
        (async () => {
            const response = await axios.get("https://landscaping-backend.onrender.com/api/houses");
            setHouses(response.data);
        })();

    },[]);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        console.log("Closing dialog box");
        setShowAddDialog(false);
    }

    const updateHousePlans = (housePlan) => {
        setHouses((houses)=>[...houses, housePlan]);
    };

    return (
        <>
            <button id="add-house" onClick={openAddDialog}>+</button>

            {showAddDialog?(<AddHousePlan 
                                closeAddDialog={closeAddDialog} 
                                updateHousePlans={updateHousePlans}
                                /> ): ("")}

            <div id="house-plans" className="columns">
                {houses.map((house)=>(
                    <HousePlan
                    key={house.name}
                    _id={house._id}
                    name={house.name}
                    description={house.description}
                    price={house.price}
                    rating={house.rating}
                    main_image={house.main_image}/>
                ))}
                
            </div>
        </>
    );
};

export default HousePlans;