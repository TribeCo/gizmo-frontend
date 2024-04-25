import { baseUrl } from ".";

export const getAllProducts = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/product/all/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 60,
			},
		});
		return response.json();
	} catch (error) {
		console.log(error);
		return 0;
	}
};

export const getAllCategories = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/category/all/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 0,
			},
		});
		return response.json();
	} catch (error) {
		console.log(error);
		return 0;
	}
};
