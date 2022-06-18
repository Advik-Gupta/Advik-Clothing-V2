import React, { useState, useEffect } from 'react'
import { CategoryConatiner, CategoryTitle } from './category.styles.jsx';
import { useParams } from 'react-router-dom';
import ProductCard from '../../components/product-card/product-card.component';
import { useSelector } from 'react-redux';
import { selectCategoriesMap, selectIsCategoriesIsLoading } from '../../store/categories/category.selectors';
import Spinner from '../../components/spinner/spinner.component.jsx';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectIsCategoriesIsLoading);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        const products = categoriesMap[category];
        setProducts(products);
    }, [category, categoriesMap]);

    return (
        <>        
            <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
            {
                isLoading ? (
                    <Spinner />
                ) : (
                    <CategoryConatiner>
                        {
                            products && products.map(product => (
                                <ProductCard key={product.id} product={product} />  
                            ))
                        }
                    </CategoryConatiner>
                )
            }
        </>
    )
}

export default Category