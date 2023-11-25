import {useState } from "react";
import DataContext from "./DataContext";

export const DataContextProvider = ({ children }) => {
    const [data, setData] = useState([]);

    return <DataContext.Provider value={{data,setData}}>{children}</DataContext.Provider>
    
};

export default DataContextProvider;