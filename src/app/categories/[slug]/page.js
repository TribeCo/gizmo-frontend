"use client";

import React from "react";
import ProductsPage from "@/components/ProductsPage";

export default function CategoryPage({ params }) {
	const categoryName = decodeURIComponent(params.slug);
	return <ProductsPage categoryName={categoryName} />;
}
