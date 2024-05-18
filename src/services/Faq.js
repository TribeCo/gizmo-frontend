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
            throw new Error('خطا در دریافت اطلاعات. لطفا دوباره تلاش کنید.');
        }
        return response.json();
    } catch (error) {
        console.error("خطا در عملیات دریافت:", error);
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
            throw new Error('خطا در دریافت اطلاعات. لطفا دوباره تلاش کنید.');
        }
        return response.json();
    } catch (error) {
        console.error("خطا در عملیات دریافت:", error);
    }
};

export const fetchGizmoInfo = async () => {
    try {
        const response = await fetch(`${baseUrl}/api/config/aboutus/`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            next: {
                revalidate: 10,
            },
        });
        if (!response.ok) {
            throw new Error('خطا در دریافت اطلاعات. لطفا دوباره تلاش کنید.');
        }
        return response.json();
    } catch (error) {
        console.error("خطا در عملیات دریافت:", error);
    }
};

