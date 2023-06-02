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

    const grabCoords = (e) => {
        console.log(`PageX:${e.pageX}, PageY:${e.pageY}`)
        console.log(`ScreenX:${e.screenX}, ScreenY:${e.screenY}`)
        console.log(`ClientX:${e.clientX}, ClientY:${e.clientY}`)
    }
    return(
        <div onClick={grabCoords} className="display-section wrapper">
            <h2 className="title">New</h2>
            <h1 className="text">Brilliant.</h1>
            <p className="description">A display that's up to 2x brighter in the sun.</p>
            <button id="landing-display" className="button">Try me!</button>
            <button  onClick={handleScroll} className="back-button">TOP</button>
        </div>   
    )
}

export default Displaysection