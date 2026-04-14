// context/ProductContext.jsx
import {  useState, useEffect } from "react";
import axios from "axios";
import API_URL from "../assets/config";
import StudentContext from "./StudentContext";



export function StudentProvider({ children }) {
    const [studentsData, setStudentsDatya] = useState([]);
   
    const [loading, setLoading] = useState(true);



    // Sayfa açılınca verileri çek
    useEffect(() => {
        const getStudents = async () => {
            const productsRes = await axios.get(`${API_URL}/students`);
            setStudentsDatya(productsRes.data);
            setLoading(false);
        };
        getStudents();
    }, []);



    // EKLE
    const addStudent = async (product) => {
        const res = await axios.post(`${API_URL}/students`, product);
        setStudentsDatya([...studentsData, res.data]);
    };

    // GÜNCELLE
    const updateStudent = async (id, updatedData) => {
        const res = await axios.put(`${API_URL}/students/${id}`, updatedData);
        setStudentsDatya(studentsData.map(p => p.id === id ? res.data : p));
    };setStudentsDatya

    // SİL
    const deleteStudent = async (id) => {
        await axios.delete(`${API_URL}/students/${id}`);
        setStudentsDatya(studentsData.filter(p => p.id !== id));
    };

    return (
        <StudentContext.Provider value={{
            studentsData,  loading,
            addStudent, updateStudent, deleteStudent
        }}>
            {children}
        </StudentContext.Provider>
    );
}

