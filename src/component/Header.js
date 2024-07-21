import React from 'react'
import food_hut from '../../assests/hut_food.png'
const Header = () => (
    <div className="header_nav" >
        <div className="header_logo">
            <img src={food_hut} alt="food logo" />
        </div>
        <div className="header_navItem">
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

export default Header