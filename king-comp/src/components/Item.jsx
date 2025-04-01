import "./css/Item.css";
import {useState} from "react";

function Item(props) {
    const [pruned, pruneTree] = useState(false);

    const doTreeJob = () => {
        pruneTree(!pruned);
    };

    return (
        <section className="item">
            <h2 className={pruned?"done":""}>{props.name}</h2>
            <p>Description: {props.description}</p>
            <p>Price: ${props.price}</p>
            <p>Rating: {props.rating}</p>
            <img src={props.image} alt="Not working"/>
            <button onClick ={doTreeJob}>Add to Cart</button>
        </section>
    );
}

export default Item;