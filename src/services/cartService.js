import { API_BASE_URL } from '../config/api';

export const getCartItems = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cart/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch cart items');
        return await response.json();
    } catch (error) {
        console.error('Error fetching cart items:', error);
        throw error;
    }
};

export const addToCart = async (userId, productId, quantity, size) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cart/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productId, quantity, size }),
        });
        if (!response.ok) throw new Error('Failed to add item to cart');
        return await response.json();
    } catch (error) {
        console.error('Error adding item to cart:', error);
        throw error;
    }
};

export const updateCartItem = async (userId, productId, quantity) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cart/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productId, quantity }),
        });
        if (!response.ok) throw new Error('Failed to update cart item');
        return await response.json();
    } catch (error) {
        console.error('Error updating cart item:', error);
        throw error;
    }
};

export const removeFromCart = async (userId, productId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/cart/remove`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productId }),
        });
        if (!response.ok) throw new Error('Failed to remove item from cart');
        return await response.json();
    } catch (error) {
        console.error('Error removing item from cart:', error);
        throw error;
    }
};