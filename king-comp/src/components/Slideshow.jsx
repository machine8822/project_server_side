import "./css/Slideshow.css";
import {useState} from "react";

const Slideshow = () => {
    const [imageIndex, setImageIndex] = useState(0);

    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$)/)
    );
    const showNextImage = () => {
        setImageIndex(imageIndex === images.length -1? 0: imageIndex+1);
    }

    const showPreviousImage = () => {
        setImageIndex(imageIndex === 0? images.length -1:imageIndex-1);
    }

    return (
        <section id="slideshow">
            <img src={images[imageIndex]} alt="Not Working" />
            <p>
                <button onClick={showNextImage}>Next</button>
                <button onClick={showPreviousImage}>Previous</button>
            </p>
        </section>
    );
};

export default Slideshow;