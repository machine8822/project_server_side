import "./css/Item.css";

function Item(props) {
    return (
        <section className="item">
            <h2>{props.name}</h2>
            <p>Description: {props.description}</p>
            <p>Price: ${props.price}</p>
            <p>Rating: {props.rating}</p>
            <img src={props.image} alt="Not working"/>
            <button>Add to Cart</button>
        </section>
    );
}

export default Item;