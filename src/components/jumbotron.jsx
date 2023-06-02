import React from "react";
import iphoneTxt from '../assets/images/iphone-14.jpg';
import iphoneInHand from '../assets/images/iphone-hand.png';

const Jumbotron = () => {

    const handleScroll = (e) => {
        e.preventDefault()
        const soundSection = document.querySelector('.sound-section');

        window.scrollTo({
            top: soundSection?.getBoundingClientRect().top,
            left: 0,
            behavior: 'smooth'
        })
    }
    

    return(
        <div className="jumbotron-section wrapper">
                <h2 className="title">New</h2>
                <img className="logo" src={iphoneTxt} alt="iPhone 14 Pro"/>
                <p className="text">Big and bigger.</p>
                <p className="description">
                    From $41.62/mo. for 24 mo. or $999 before trade-in
                </p>
            <div className="links">
                <button  className="button">Buy</button>
                <a onClick={handleScroll} className="link" href="/">Learn more</a>
            </div>
            
            <img className="iphone-img" src={iphoneInHand} alt="iPhone" />

        </div>
    )
}

export default Jumbotron