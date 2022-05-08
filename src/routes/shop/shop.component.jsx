import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../categories-preview/categories-preview.component';
import Category from '../category/category.component';
import { getDataFromFirestore } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/category.actions";

const Shop = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const getCategories = async () => {
            const categoryMap = await getDataFromFirestore();
            dispatch(setCategories(categoryMap));
        }
        getCategories()
    }, [])

    return (
        <Routes>
            <Route index element={<CategoriesPreview />} />
            <Route path=':category' element={<Category />} />
        </Routes>
    )
}

export default Shop;