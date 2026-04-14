// context/ProductContext.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../assets/config";
import ProductContext from "./ProductContext";

export function ProductProvider({ children }) {
    const [productsData, setProductsData] = useState([]);
    const [categoriesData, setCategoriesData] = useState([]);
    const [loading, setLoading] = useState(true);



    // Sayfa açılınca verileri çek
    useEffect(() => {
        const getProducts = async () => {
            const productsRes = await axios.get(`${API_URL}/products`);
            const categoriesRes = await axios.get(`${API_URL}/categories`);
            setProductsData(productsRes.data);
            setCategoriesData(categoriesRes.data);
            setLoading(false);
        };
        getProducts();
    }, []);



    // EKLE
    const addProduct = async (product) => {
        const res = await axios.post(`${API_URL}/products`, product);
        setProductsData([...productsData, res.data]);
    };

    // GÜNCELLE
    const updateProduct = async (id, updatedData) => {
        const res = await axios.put(`${API_URL}/products/${id}`, updatedData);
        setProductsData(productsData.map(p => p.id === id ? res.data : p));
    };

    // SİL
    const deleteProduct = async (id) => {
        await axios.delete(`${API_URL}/products/${id}`);
        setProductsData(productsData.filter(p => p.id !== id));
    };

    return (
        <ProductContext.Provider value={{
            productsData, categoriesData, loading,
            addProduct, updateProduct, deleteProduct
        }}>
            {children}
        </ProductContext.Provider>
    );
}

