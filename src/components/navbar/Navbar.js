import React from 'react'
import "./navbar.css";

export default function Navbar() {
    return (
        <div>
            <nav>
                <div className="navdiv">
                    <h4>Paltu</h4>
                    <input type="search" placeholder="Search for product, brand and more"/>
                    <i class="fas fa-search searchicon"></i>
                </div>
                <div className="navdiv">
                    <h6 className="Navbtn">Login</h6>
                    <h6>More <i class="fas fa-chevron-down"></i></h6>
                    <h6>Cart <i class="fas fa-shopping-cart"></i></h6>
                </div>
            </nav>
        </div>
    )
}
