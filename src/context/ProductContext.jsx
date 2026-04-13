// context/ProductContext.jsx
import { createContext, useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../config";

const ProductContext = createContext();

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);



    // Sayfa açılınca verileri çek
    useEffect(() => {
        const getProducts = async () => {
            const productsRes = await axios.get(`${API_URL}/products`);
            const categoriesRes = await axios.get(`${API_URL}/categories`);
            setProducts(productsRes.data);
            setCategories(categoriesRes.data);
            setLoading(false);
        };
        getProducts();
    }, []);



    // EKLE
    const addProduct = async (product) => {
        const res = await axios.post(`${API_URL}/products`, product);
        setProducts([...products, res.data]);
    };

    // GÜNCELLE
    const updateProduct = async (id, updatedData) => {
        const res = await axios.put(`${API_URL}/products/${id}`, updatedData);
        setProducts(products.map(p => p.id === id ? res.data : p));
    };

    // SİL
    const deleteProduct = async (id) => {
        await axios.delete(`${API_URL}/products/${id}`);
        setProducts(products.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{
            products, categories, loading,
            addProduct, updateProduct, deleteProduct
        }}>
            {children}
        </ProductContext.Provider>
    );
}

