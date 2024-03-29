import { baseUrl } from "./index";

export const productData = async ({ slug }) => {
	try {
		const response = await fetch(`${baseUrl}/api/product/${slug}/`, {
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
		console.log(error);
		return 0;
	}
};

export const getComments = async ({ pid }) => {
	try {
		const response = await fetch(`${baseUrl}/api/products/comments/${pid}/`, {
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
		console.log(error);
		return 0;
	}
};

export const getSimilar = async ({ pid }) => {
	try {
		const response = await fetch(`${baseUrl}/api/product/similar/${pid}/`, {
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
		console.log(error);
		return 0;
	}
};

export const recentlySeenProduct = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/product/observed/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer `,
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

export const addToFavorites = async ({ pid, access }) => {
	try {
		const response = await fetch(`${baseUrl}/api/favorites/add/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access}`,
			},
			next: {
				revalidate: 1,
			},
			body: JSON.stringify({
				id: pid,
			}),
		});
		console.log(response.status);
		return response.json();
	} catch (error) {
		console.log(error);
		return 0;
	}
};

export const deleteFavorites = async ({ pid, access }) => {
	try {
		const response = await fetch(`${baseUrl}/api/favorites/delete/`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access}`,
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
		return 0;
	}
};

export const availableNotification = async ({ pid, access }) => {
	try {
		const response = await fetch(`${baseUrl}/api/informing/add/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access}`,
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
		return 0;
	}
};

export const createComment = async ({ pid, access, data }) => {
	try {
		const response = await fetch(`${baseUrl}/api/products/comments/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access}`,
			},
			next: {
				revalidate: 1,
			},

			body: JSON.stringify({
				product: pid,
				text: data.text,
				anonymous: data.anonymous,
				rate: data.rate,
				satisfaction: data.satisfaction,
			}),
		});
		return response.json();
	} catch (error) {
		console.log(error);
		return 0;
	}
};
