import { baseUrl } from "./index";

export const productData = async ({ pid }) => {
	try {
		const response = await fetch(`${baseUrl}/api/product/${pid}/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		});
		return response.json();
	} catch (error) {
		alert("unhandeled error");
		alert(error);
		return 0;
	}
};

export const addToFavorites = async ({ pid, access }) => {
	try {
		const response = await fetch(`${baseUrl}/api/favorites/add/${pid}/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access}`,
			},
		});
		return response.json();
	} catch (error) {
		alert("unhandeled error");
		alert(error);
		return 0;
	}
};
