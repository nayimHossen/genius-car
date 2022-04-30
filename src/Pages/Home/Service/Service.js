import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>price: {price}</p>
            <p>{description}</p>
        </div>
    );
};

export default Service;