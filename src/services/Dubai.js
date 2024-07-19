import { baseUrl } from "./index";

export const createProduct = async (url) => {
	try {
		const response = await fetch(`${baseUrl}/api/foreign/product/create/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 1,
			},
			body: JSON.stringify({
				url: url,
			}),
		});
		return response.json();
	} catch (error) {
		throw new Error("خطایی رخ داد!");
	}
};

export const createOrder = async ({ pid, tokens }) => {
	try {
		const response = await fetch(`${baseUrl}/api/foreign/order/create/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${tokens.access}`,
			},
			next: {
				revalidate: 1,
			},
			body: JSON.stringify({
				id: pid,
			}),
		});
		return response.json();
	} catch (error) {
		console.log(error);
		throw new Error("خطایی رخ داد!");
	}
};

export const getSites = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/other/sites/all/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 1,
			},
		});
		return response.json();
	} catch (error) {
		return 0;
	}
};
