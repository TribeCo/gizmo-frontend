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


export const GetArticle = async ({ slug }) => {
	try {
		const response = await fetch(`${baseUrl}/api/gizmolog/article/${slug}/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 1,
			},
		});
		const { data } = await response.json();
		return data;
	} catch (error) {
		return 0;
	}
}

export const createComment = async ({ aid, access, data }) => {
	try {
		const response = await fetch(`${baseUrl}/api/articles/comments/`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${access}`,
			},
			next: {
				revalidate: 1,
			},

			body: JSON.stringify({
				article: aid,
				text: data.text,
				anonymous: data.anonymous,
			}),
		});
		return response.json();
	} catch (error) {
		console.log(error);
		return 0;
	}
}