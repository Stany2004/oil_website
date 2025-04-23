import { API_BASE_URL } from '../config/api';

export const getWishlistItems = async (userId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/wishlist/${userId}`);
        if (!response.ok) throw new Error('Failed to fetch wishlist items');
        return await response.json();
    } catch (error) {
        console.error('Error fetching wishlist items:', error);
        throw error;
    }
};

export const addToWishlist = async (userId, productId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/wishlist/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productId }),
        });
        if (!response.ok) throw new Error('Failed to add item to wishlist');
        return await response.json();
    } catch (error) {
        console.error('Error adding item to wishlist:', error);
        throw error;
    }
};

export const removeFromWishlist = async (userId, productId) => {
    try {
        const response = await fetch(`${API_BASE_URL}/wishlist/remove`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId, productId }),
        });
        if (!response.ok) throw new Error('Failed to remove item from wishlist');
        return await response.json();
    } catch (error) {
        console.error('Error removing item from wishlist:', error);
        throw error;
    }
};