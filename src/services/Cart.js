import { baseUrl } from ".";

export const createOrder = async ({ pid, tokens }) => {
	try {
		const response = await fetch(`${baseUrl}/api/coupon/apply/`, {
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
