import React from 'react';
import "./HomeReviews.css";

const HomeReviews = (props) => {
    const { name, img, review, rating } = props.data;
    return (
        <div className='bg-slate-100 p-5 rounded-md home-reviews'>
            <img className='h-24 w-24 rounded-full m-auto' src={img} alt=" " />
            <h1 className='text-xl text-center py-3 text-slate-600'>{name}</h1>
            <p>{review}</p>
            <p className='bg-slate-500 py-3 text-center rounded-md text-white home-reviews-rating'>Rating: {rating}</p>
        </div>
    );
};

export default HomeReviews;