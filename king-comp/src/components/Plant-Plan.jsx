import {useState, useEffect} from "react";
import axios from "axios";
import HousePlan from "./Plant.jsx";

const HousePlans = () => {
    const [houses, setHouses] = useState([]);

    //after page loaded to async json retrieval
    useEffect(()=>{
        //automatically execute the async function
        (async () => {
            const response = await axios.get("https://landscaping-backend-temp.onrender.com/api/houses");
            setHouses(response.data);
        })();

    },[]);

    return (
        <div id="house-plans" className="columns">
            {houses.map((house)=>(
                <HousePlan 
                _id={house._id}
                name={house.name}
                description={house.description}
                price={house.price}
                rating={house.rating}
                main_image={house.img1}/>
            ))}
            
        </div>
    );
};

export default HousePlans;