import "./css/Item.css";

function Item(props) {
    return (
        <section className="item">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <img src={props.image}/>
        </section>
    );
}

export default Item;