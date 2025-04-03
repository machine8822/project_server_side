import "./css/HousePlan.css";

const HousePlan = (props) => {
    return(
        <section className="house-plan columns">
            <section>
                <img src={props.main_image} />
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