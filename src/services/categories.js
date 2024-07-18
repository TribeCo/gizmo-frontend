import { baseUrl } from ".";

export const getBrands = async () => {
	try {
		const response = await fetch(`${baseUrl}/api/brand/all/`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		const brands = [];
		data.forEach((element) => {
			brands.push(element.name);
		});
		return brands;
	} catch (error) {
		throw new Error("There was a problem with the fetch operation");
	}
};
