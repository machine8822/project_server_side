import "./css/HousePlan.css";

const HousePlan = (props) => {
    return(
        <section className="house-plan columns">
            <section className="feature-image">
                <img src={"http://localhost:3001/images/" + props.main_image} alt={props.name} />
            </section>
            <section>
                <h3>{props.name}</h3>
                <p>{props.size}</p>
                <p>{props.bedrooms}</p>
                <p>{props.bathrooms}</p>
            </section>
            
        </section>
    );
};

export default HousePlan;