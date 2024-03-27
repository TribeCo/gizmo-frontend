"use client";

import React, { useEffect, useState } from "react";

import { baseUrl } from "@/services/index";
import { useAuth } from "@/context/AuthContext";
import CardProductSlider from "./CardProductSlider";
import LineSplitter from "./LineSpliter";

const recentlySeenProduct = async (tokens) => {
	try {
		const response = await fetch(`${baseUrl}/api/product/observed/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			next: {
				revalidate: 1,
			},
		});
		return response.json();
	} catch (error) {
		console.log(error);
		return 0;
	}
};

const RecentlySeen = () => {
	const [products, setProducts] = useState(null);
	const { tokens } = useAuth();

	useEffect(() => {
		const getData = async () => {
			const { data } = await recentlySeenProduct(tokens);
			setProducts(data);
		};

		getData();
	}, [tokens]);

	if (products && products.length > 0) {
		return (
			<>
				<LineSplitter text={"محصولات مشاهده شده"} />
				<CardProductSlider
					btn={false}
					products={products}
					swapTime_millisecond={10000}
				/>
			</>
		);
	} else {
		return "";
	}
};

export default RecentlySeen;
