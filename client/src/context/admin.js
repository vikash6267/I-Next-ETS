import { createContext, useEffect, useState } from "react";
import Cookies from "cookies-js";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase.config";

export const admin = createContext();

const AdminContextProvider = ({ children }) => {
  const [adminData, setAdminData] = useState();

  const getCurrentUser = async () => {
    const userId = Cookies?.get("userId");
    if (userId) {
      const q = query(collection(db, "admin"), where("userId", "==", userId));
      const dataSnap = await getDocs(q);
      dataSnap.forEach((doc) => {
        setAdminData(doc.data());
      });
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return <admin.Provider value={{ adminData, setAdminData }}>{children}</admin.Provider>;
};
export default AdminContextProvider;