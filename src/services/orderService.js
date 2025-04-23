import { API_BASE_URL } from '../config/api';

export const createOrder = async (orderData) => {
    try {
        const response = await fetch(`${API_BASE_URL}/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });
        if (!response.ok) throw new Error('Failed to create order');
        return await response.json();
    } catch (error) {
        console.error('Error creating order:', error);
        throw error;
    }
};

export const getUserOrders = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/orders/user/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch user orders');
        return await response.json();
    } catch (error) {
        console.error('Error fetching user orders:', error);
        throw error;
    }
};