import React, { useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import axiosPrivate from '../../api/axiosPrivate';

const Order = () => {
    const [orders, setOrders] = useState();
    const [user] = useAuthState(auth)
    const navigate = useNavigate();

    useEffect(() => {
        const getOrders = async () => {
            const email = user?.email;
            const url = `https://shielded-fortress-24229.herokuapp.com/order?email=${email}`;
            try {
                const { data } = await axiosPrivate.get(url);
                setOrders(data);
            }
            catch (error) {
                console.log(error.message)
                if (error.response.status === 401 || error.response.status === 403) {
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        getOrders();
    }, [user]);
    return (
        <div style={{ height: "90vh" }}>
            <h2>Your order : {orders?.length}</h2>
            {
                orders.map(order => <div key={order._id}>
                    <p>{order.email} : {order.service}</p>
                </div>)
            }
        </div>
    );
};

export default Order;