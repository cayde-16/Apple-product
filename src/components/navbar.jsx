import React from "react";
import logo from '../assets/images/logo.svg'
import search from '../assets/images/search.svg'
import store from '../assets/images/store.svg'


const Navbar = () => {
    return(
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    {/* Apple Logo */}
                    <li>
                        <img src={logo} alt="" />
                    </li>

                    {/* store item */}
                    <li className="link-styled">
                        <a>Store</a>
                    </li>

                    {/* Mac item */}
                    <li className="link-styled">
                        <a>Mac</a>
                    </li>


                    {/* ipad item */}
                    <li className="link-styled">
                        <a>iPad</a>
                    </li>


                    {/* iPhone item */}
                    <li className="link-styled">
                        <a>iPhone</a>
                    </li>

                    {/* Watch item */}
                    <li className="link-styled">
                        <a>Watch</a>
                    </li>

                    {/* AirPods */}
                    <li className="link-styled">
                        <a>Airpods</a>
                    </li>

                    {/* TV & Home */}
                    <li className="link-styled">
                        <a>TV & Home</a>
                    </li>


                    {/* Entertainment */}
                    <li className="link-styled">
                        <a>Entertainment</a>
                    </li>


                    {/* Acessories */}
                    <li className="link-styled">
                        <a>Acessories</a>
                    </li>

                    {/* Support */}
                    <li className="link-styled">
                        <a>Support</a>
                    </li>

                    {/* Search & Store Icon */}
                    <li>
                        <div className="icons-container">
                            <div className="navIcon">
                                <img src={search} alt="search" />
                            </div>

                            <div className="navIcon">
                                <img src={store} alt="store" />
                            </div>

                        </div>
                    </li>

                    
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;