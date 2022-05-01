import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();

    return (
        <div>
            <h2>This is service components={serviceId}</h2>
            <Link to="/checkout">
                <button>checkout button</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;