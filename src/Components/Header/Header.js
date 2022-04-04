import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-xl flex gap-4 justify-center text-center'>
            <Link to="/">HOME</Link>
            <Link to="/review">REVIEWS</Link>
            <Link to="/dashboard">DASHBOARD</Link>
        </div>
    );
};

export default Header;