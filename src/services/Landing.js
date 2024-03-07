import { baseUrl } from "./index";

export const banners = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/banners/read/c2/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 10,
			},
		});
		return response.json();
	} catch (error) {
		alert("unhandeled error");
		alert(error);
		return 0;
	}
};

export const newProducts = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/product/news/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 10,
			},
		});
		return response.json();
	} catch (error) {
		alert("unhandeled error");
		alert(error);
		return 0;
	}
};

export const discountProducts = async () => {
	try {
		const response = await fetch(
			`https://gizmoshop.liara.run/api/product/discounted/`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
				next: {
					revalidate: 10,
				},
			},
		);
		return response.json();
	} catch (error) {
		alert("unhandeled error");
		alert(error);
		return 0;
	}
};

export const recentlySeenProduct = async ({ access }) => {
	try {
		const response = await fetch(`${baseUrl}/api/product/observed/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access}`,
			},
			next: {
				revalidate: 10,
			},
		});
		return response.json();
	} catch (error) {
		alert("unhandeled error");
		alert(error);
		return 0;
	}
};
export const category = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/category/landing/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 10,
			},
		});
		return response.json();
	} catch (error) {
		alert("unhandeled error");
		alert(error);
		return 0;
	}
};

export const brands = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/brand/all/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 10,
			},
		});
		return response.json();
	} catch (error) {
		alert("unhandeled error");
		alert(error);
		return 0;
	}
};

export const gizmologCarts = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/gizmolog/landing/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 10,
			},
		});
		return response.json();
	} catch (error) {
		alert("unhandeled error");
		alert(error);
		return 0;
	}
};
