import "./css/HousePlan.css";

const HousePlan = (props) => {
    return(
        <section className="house-plan">
            <section className="feature-image">
                <img src={props.main_image} alt={props.name} />
            </section>
            <section className="info">
                <h3>Name: {props.name}</h3>
                <p>{props.description}</p>
                <p>{props.price}</p>
                <p>{props.rating}</p>
            </section>
            
        </section>
    );
};

export default HousePlan;