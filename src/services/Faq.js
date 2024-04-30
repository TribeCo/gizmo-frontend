import { baseUrl } from "./index";
export const fetchQuestions = async (id) => {
    try {
        const response = await fetch(`${baseUrl}/api/faqs/groups/read/${id}`, {
            method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 10,
			},
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (response.json());
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

export const fetchIcons = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/faqs/groups/all/`, {
            method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			next: {
				revalidate: 10,
			},
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return (response.json());
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
};

