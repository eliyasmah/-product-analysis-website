import React from 'react';
import useData from '../../hooks/useData';
import Carts from '../Carts/Carts';

const Reviews = () => {
    const [carts, setCarts] = useData();

    return (
        <div className='md:grid grid-cols-3 gap-10 mx-20 mt-16'>
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