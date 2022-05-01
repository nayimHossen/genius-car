import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { _id, name, img, description, price } = service;
    const navigate = useNavigate();
    const detailButtonHandle = (id) => {
        navigate(`/service/${id}`)
    };
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>{name}</h3>
            <p>price: {price}</p>
            <p>{description}</p>
            <button className='mb-2 btn-primary rounded' onClick={() => detailButtonHandle(_id)}>Details</button>
        </div>
    );
};

export default Service;