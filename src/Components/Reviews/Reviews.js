import React from 'react';
import useData from '../../hooks/useData';
import Carts from '../Carts/Carts';

const Reviews = () => {
    const [carts, setCarts] = useData();

    return (
        <div>
            {
                carts.map(cart => <Carts
                    key={cart._id}
                    cart={cart}
                ></Carts>)
            }
        </div>
    );
};

export default Reviews;