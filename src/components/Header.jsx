import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
            <nav className='flex gap-5'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/signup">Sign up</NavLink>
                <NavLink to="/signin">Sign in</NavLink>
            </nav>
        </div>
    );
};

export default Header;