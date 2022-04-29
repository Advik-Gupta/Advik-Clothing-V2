import { createContext, useState, useEffect } from "react";
import { getDataFromFirestore } from "../utils/firebase/firebase.utils.js";

export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => null,
});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});
    const value = { categoriesMap };

    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getDataFromFirestore();
            setCategoriesMap(categoryMap);
        }
        getCategories()
    }, [])
    

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}