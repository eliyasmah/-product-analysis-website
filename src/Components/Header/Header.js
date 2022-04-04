import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='text-xl flex gap-4 justify-center text-center bg-slate-300 py-5'>
            <CustomLink to="/">HOME</CustomLink>
            <CustomLink to="/reviews">REVIEWS</CustomLink>
            <CustomLink to="/dashboard">DASHBOARD</CustomLink>
            <CustomLink to="/blogs">BLOGS</CustomLink>
        </div>
    );
};

export default Header;