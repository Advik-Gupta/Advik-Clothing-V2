import React from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectIsCategoriesIsLoading } from '../../store/categories/category.selectors';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import Spinner from '../../components/spinner/spinner.component';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesIsLoading);

    return (
        <>
            { 
                isLoading ? (
                    <Spinner />
                ) : (
                    Object.keys(categoriesMap).map((title) => {
                        const products = categoriesMap[title];
                        return (
                        <CategoryPreview key={title} title={title} products={products} />
                        );
                    })
                )
            }
        </>
    )
}

export default CategoriesPreview;