/* eslint-disable no-unused-vars */
import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const Verify = () => {
    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);

    const [searchParmas, setSearchParams] = useSearchParams();
    const success = searchParmas.get('success');
    const orderId = searchParmas.get('orderId');

    const verifyPayment = async () => {
        try {
            if (!token) {
                return null;
            }

            const response = await axios.post(backendUrl + '/api/order/verify-stripe', { success, orderId }, { headers: { token } });

            if (response.data.success) {
                setCartItems({});
                navigate('/orders');
            } else {
                navigate('/cart');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        verifyPayment();
    }, [token])

    return (
        <div>

        </div>
    )
}

export default Verify