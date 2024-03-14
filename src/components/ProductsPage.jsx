"use client"
import React, { useState, useEffect } from 'react';
import ProductsGrid from "@/components/ProductsGrid";
import LineSplitter from "@/components/LineSpliter";
// import { products } from '@/utils/fakeProduct';

function ProductsPage({ categoryName }) {
    const [productsList, setProductsList] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://gizmoshop.liara.run/api/${categoryName}/products/`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProductsList(data.data);
            } catch (error) {
                console.error("There was a problem with the fetch operation:", error);
            }
        };

        fetchProducts();
    }, [categoryName]); // Re-fetch when categoryName changes

    return (
        <div>
            <LineSplitter text={`محصولات ${categoryName}`} />
            <ProductsGrid productsList={productsList} />
        </div>
    );
}

export default ProductsPage;
