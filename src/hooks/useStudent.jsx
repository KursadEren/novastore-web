// hooks/useProducts.js
import { useContext } from "react";
import StudentContext from "../context/StudentContext";


const useStudent = () => useContext(StudentContext);
export default useStudent;