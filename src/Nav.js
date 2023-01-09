import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

//destructure props for dogs array 
const Nav = ({ dogs }) => {
    //create array for dog names without other dog info
    const dogNames = dogs.map((dog, i) => (<NavLink to={`/dogs/${dog.name}`} key={`${i}`}>{dog.name}</NavLink>))

    return (
        <nav className="Navbar">
            <NavLink
                to="/dogs">All Dogs
            </NavLink>
            {dogNames}
        </nav>
    )
}

export default Nav;