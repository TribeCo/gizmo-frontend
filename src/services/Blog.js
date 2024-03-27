import { baseUrl } from "./index";

export const BannerImages = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/banners/read/gl/`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 10,
			},
		});
		const data = response.json();
		console.log(data);
	} catch (error) {
		return 0;
	}
};
