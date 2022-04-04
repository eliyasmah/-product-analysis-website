import React from 'react';

const Carts = (props) => {
    const { name, img, rating } = props.cart;
    return (
        <div>
            <h1>this is bcart</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default Carts;