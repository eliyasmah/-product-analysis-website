import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-xl text-center'>
            <Link to="/">HOME</Link>
            <Link to="/review">REVIEWS</Link>
        </div>
    );
};

export default Header;