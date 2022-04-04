import React from 'react';
import "./Carts.css";

const Carts = (props) => {
    const { name, img, rating, review } = props.cart;
    return (
        <div className='bg-slate-100 p-5 rounded-md home-reviews'>
            <img className='h-24 w-24 rounded-full m-auto' src={img} alt=" " />
            <h1 className='text-xl text-center py-3 text-slate-600'>{name}</h1>
            <p>{review}</p>
            <button className='bg-slate-700 py-3 rounded-md text-white home-reviews-btn'>Rating: {rating}</button>
        </div>
    );
};

export default Carts;