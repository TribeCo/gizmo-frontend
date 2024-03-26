"use client";

import { baseUrl } from "./index";

const tokens = localStorage.getItem("tokens");

export const recentlySeenProduct = async () => {
	console.log(tokens);
	try {
		const response = await fetch(`${baseUrl}/api/product/observed/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			next: {
				revalidate: 10,
			},
		});
		return response.json();
	} catch (error) {
		console.log(error);
		return 0;
	}
};
