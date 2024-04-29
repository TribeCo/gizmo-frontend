import { baseUrl } from "./index";

export const GetFooterLinks = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/config/aboutus/`, {
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
