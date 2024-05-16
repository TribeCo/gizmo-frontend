// app/products/[categorySlug]/page.js
"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import ProductsPage from '@/components/ProductsPage';

export default function CategoryPage({ params }) {
  console.log(params)
  const pathname = usePathname();
  const pathSegments = pathname.split('/');
  const encodedSlug = pathSegments[pathSegments.length - 1]; // Gets the last segment of the URL
  const categoryName = decodeURIComponent(encodedSlug); // Decode the slug to get the actual category name
  return <ProductsPage categoryName={params.slug} />;
}
