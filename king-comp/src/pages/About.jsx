import './css/About.css';
import image from "../images/CompanyStore.jpg";
import Contact from '../components/ContactMe';

function About() {
    return(
        
        <div className="about-content">
            <div className="flex-container2">
            <img src={image} alt="Not working."/>
            <p>We are a family owned business that was started in 1996. We offer many different equipment and plants to suite all your needs.</p>
            <p>Open: Mon-Sun: 7am-5pm</p>
            <p>Located on the corner of Overcup and King.</p>
            
            </div>
            <Contact />
        </div>
        
    );
}

export default About;