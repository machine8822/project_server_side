import {useState, useEffect} from "react";
import axios from "axios";
import HousePlan from "./HousePlan";

const HousePlans = () => {
    const [houses, setHouses] = useState([]);

    //after page loaded to async json retrieval
    useEffect(()=>{
        //automatically execute the async function
        (async () => {
            const response = await axios.get("http://localhost:3001/api/houses");
            setHouses(response.data);
        })();

    },[]);

    return (
        <div id="house-plans" className="columns">
            {houses.map((house)=>(
                <HousePlan 
                _id={house._id}
                name={house.name}
                desciption={house.desciption}
                price={house.price}
                rating={house.rating}
                main_image={house.img1}/>
            ))}
            
        </div>
    );
};

export default HousePlans;