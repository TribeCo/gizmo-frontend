import { baseUrl } from "./index";

export const BannerImages = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/banners/read/gl/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 1,
			},
		});
		const data = response.json();
		return data;
	} catch (error) {
		return 0;
	}
};

export const Popular = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/gizmolog/popular/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 1,
			},
		});
		const data = response.json();
		return data;
	} catch (error) {
		return 0;
	}
};

export const GetNews = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/gizmolog/news/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 1,
			},
		});
		const data = response.json();
		return data;
	} catch (error) {
		return 0;
	}
};

export const GetSimilarArticles = async ({ id }) => {
	try {
		const response = await fetch(`${baseUrl}/api/gizmolog/article/similar/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 1,
			},
		});
		const data = response.json();
		return data;
	} catch (error) {
		return 0;
	}
}


export const GetArticle = async ({ id }) => {
	try {
		const response = await fetch(`${baseUrl}/api/gizmolog/article/${id}`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 1,
			},
		});
		const data = response.json();
		return data;
	} catch (error) {
		return 0;
	}
}
