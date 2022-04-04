import React, { useEffect, useState } from 'react';
import Customers from '../Components/Customers/Customers';

const Reviews = () => {
    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        fetch('customers.json')
            .then(res => res.json())
            .then(data => setCustomers(data))
    }, [])
    return (
        <div>
            <h1>Customers review!!:{customers.length}</h1>
            {/* {
                customers.map(customer => <Customers
                    key={ }
                ></Customers>)
            } */}
            <div>
                <img src="" alt="" />
                <p>Name:{customers}</p>
                <p>Rating:4.5</p>
            </div>
        </div>
    );
};

export default Reviews;