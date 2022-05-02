import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useServiceDetail from '../../hooks/useServiceDetail';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);

    return (
        <div>
            <h2>This is service components: {service?.name}</h2>
            <Link to={`/checkout/${serviceId}`}>
                <button>checkout button</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;