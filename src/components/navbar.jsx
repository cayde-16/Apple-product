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
                    <li>
                        <p>Store</p>
                    </li>

                    {/* Mac item */}
                    <li>
                        <p>Mac</p>
                    </li>


                    {/* ipad item */}
                    <li>
                        <p>iPad</p>
                    </li>


                    {/* iPhone item */}
                    <li>
                        <p>iPhone</p>
                    </li>

                    {/* Watch item */}
                    <li>
                        <p>Watch</p>
                    </li>

                    {/* AirPods */}
                    <li>
                        <p>Airpods</p>
                    </li>

                    {/* TV & Home */}
                    <li>
                        <p>TV & Home</p>
                    </li>


                    {/* Entertainment */}
                    <li>
                        <p>Entertainment</p>
                    </li>


                    {/* Acessories */}
                    <li>
                        <p>Acessories</p>
                    </li>

                    {/* Support */}
                    <li>
                        <p>Support</p>
                    </li>

                    {/* Search Icon */}
                    <li>
                        <div>
                            <img src={search} alt="search" />
                        </div>
                    </li>

                    {/* Store Icon */}
                    <li> 
                        <div>
                            <img src={store} alt="store" />
                        </div>   
                    </li>
                </ul>
            </div>

        </nav>
    )
}

export default Navbar;