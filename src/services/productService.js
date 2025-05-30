import { API_BASE_URL } from '../config/api';

export const getProducts = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/products`);
        if (!response.ok) throw new Error('Failed to fetch products');
        return await response.json();
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};

export const getProductById = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products/${id}`);
        if (!response.ok) throw new Error('Failed to fetch product');
        return await response.json();
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};

export const getProductsByCategory = async (category) => {
    try {
        const response = await fetch(`${API_BASE_URL}/products/category/${category}`);
        if (!response.ok) throw new Error('Failed to fetch products by category');
        return await response.json();
    } catch (error) {
        console.error('Error fetching products by category:', error);
        throw error;
    }
};