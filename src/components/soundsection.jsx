import React, { useRef } from "react";

const Soundsection = () => {

    
    const handleChange = (e) => {
        e.preventDefault()
        const displaySection = document.querySelector('#landing-display');

        window.scrollTo({
            top:2479,
            left:859,
            behavior: "smooth"
        })
        
    }
    
    // PageX:859, PageY:2479
    // displaySection.jsx:18 ScreenX:-974, ScreenY:1030
    // displaySection.jsx:19 ClientX:859, ClientY:713

    return(
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section content">
                    <h2 id="scrollPad" className="title">New Sound System</h2>
                    <p className="text">Feel the base.</p>
                    <p>From $41.62/mo for 24 mo. or $999 before trade-in</p>

                    <div className="links">
                        <button className="button">Buy</button>
                        <a onClick={handleChange} className="link" href="/">Learn more</a>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Soundsection