import "./css/Slideshow.css";
import {useState} from "react";

const Slideshow = () => {
    const importAll = (resource) => {
        return resource.keys().map(resource);
    };

    const images = importAll(
        require.context("../images/slideshow", false, /\.(png|jpe?g|svg$)/)
    );

    return (
        <section id="slideshow">

        </section>
    );
};

export default Slideshow;