import React from "react";

const Displaysection = () => {

    const handleScroll = (e) => {
        e.preventDefault()
        const heroSection = document.querySelector('.jumbotron-section');
        window.scrollTo({
            top: heroSection?.getBoundingClientRect().top,
            left:0,
            behavior:"smooth"
        }) 

    }

    return(
        <div className="display-section wrapper">
            <h2 className="title">New</h2>
            <h1 className="text">Brilliant.</h1>
            <p className="description">A display that's up to 2x brighter in the sun.</p>
            <button className="button">Try me!</button>
            <button onClick={handleScroll} className="back-button">TOP</button>
        </div>   
    )
}

export default Displaysection