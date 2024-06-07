import { createContext, useEffect, useState } from "react";
import Cookies from "cookies-js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase.config";

export const employee = createContext();

const EmployeeContextProvider = ({ children }) => {
  const [employeeData, setemployeeData] = useState();

  const getCurrentUser = async () => {
    const email = Cookies?.get("email");
    console.log("--------> this is from cookies", email);
    if (email) {
      const q = query(collection(db, "employees"), where("email", "==", email));
      const dataSnap = await getDocs(q);
      dataSnap.forEach((doc) => {
        setemployeeData(doc.data());
      });
    }
  };
  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <employee.Provider value={{ employeeData, setemployeeData }}>
      {children}
    </employee.Provider>
  );
};
export default EmployeeContextProvider;
