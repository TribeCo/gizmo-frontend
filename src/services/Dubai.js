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
		return 0;
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
		return 0;
	}
};
