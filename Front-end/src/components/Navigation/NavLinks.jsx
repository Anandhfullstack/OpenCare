import React from 'react';
import { NavLink } from 'react-router-dom';

import Button from '../Elements/Button';

import './NavLinks.css';

const NavLinks = (props) => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>Home</NavLink>
            </li>
            <li>
                <NavLink to="/about" exact>About Us</NavLink>
            </li>
            <li>
                <NavLink to="/threads" exact>Threads</NavLink>
            </li>
            <li>
                <NavLink to="/auth" exact>Login with Google</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
