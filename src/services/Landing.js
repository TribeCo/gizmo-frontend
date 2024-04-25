import { baseUrl } from "./index";

export const topSlider = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/banners/read/b1/`, {
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
		console.log(error);
		return 0;
	}
};

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
		console.log(error);
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
		console.log(error);
		return 0;
	}
};

export const discountProducts = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/product/discounted/`, {
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
		console.log(error);
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
		console.log(error);
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
		console.log(error);
		return 0;
	}
};

export const gizmologCards = async () => {
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
		console.log(error);
		return 0;
	}
};
