import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServiceDetail from '../../hooks/useServiceDetail';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetail(serviceId);
    const [user] = useAuthState(auth);

    const handelPlaceOrder = (event) => {
        event.preventDefault();

        const order = {
            email: user.email,
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
        }
        axios.post('https://shielded-fortress-24229.herokuapp.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked');
                }
                event.target.reset();
            })
    }

    return (
        <div className='w-50 mx-auto' style={{ height: "90vh" }}>
            <h2>Please order: {service?.name}</h2>
            <form onSubmit={handelPlaceOrder}>
                <input className='w-100 mb-2' value={user.displayName} readOnly type="text" name='name' placeholder='name' required />
                <br />
                <input className='w-100 mb-2' value={user.email} readOnly name='email' type="email" placeholder='email' required />
                <br />
                <input className='w-100 mb-2' value={service?.name} name='service' type="text" placeholder='service' required />
                <br />
                <input className='w-100 mb-2' name='address' autoComplete='off' type="text" placeholder='address' required />
                <br />
                <input className='w-100 mb-2' name='phone' type="text" placeholder='phone' required />
                <br />
                <input className='btn btn-primary' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default CheckOut;