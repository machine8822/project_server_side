import {useState, useEffect} from "react";
import axios from "axios";
import HousePlan from "./HousePlan";
import "./css/HousePlans.css";

const HousePlans = () => {
    const [plants, setHouses] = useState([]);

    //after page loaded to async json retrieval
    useEffect(()=>{
        //automatically execute the async function
        (async () => {
            const response = await axios.get("https://landscaping-backend.onrender.com/api/plants");
            setHouses(response.data);
        })();

    },[]);

    return (
        <div id="house-plans" className="columns">
            {plants.map((house)=>(
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
    );
};

export default HousePlans;