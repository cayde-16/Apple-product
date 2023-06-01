import React, { useRef } from "react";

const Soundsection = () => {

    const soundSection = document.getElementById('')
    const handleChange = (e) => {
        const myRef = useRef(null)
        e.preventDefault()
        console.log('Learn More button was clicked')
        console.log(`X:${e.pageX}, Y:${e.pageY}` )
    }
    
    return(
        <div className="sound-section wrapper">
            <div className="body">
                <div className="sound-section content">
                    <h2 id="scrollPad" onClick={handleChange} className="title">New Sound System</h2>
                    <p className="text">Feel the base.</p>
                    <p>From $41.62/mo for 24 mo. or $999 before trade-in</p>

                    <div className="links">
                        <button className="button">Buy</button>
                        <a className="link" href="/">Learn more</a>
                    </div>
                </div> 
            </div>
        </div>
    )
}

export default Soundsection