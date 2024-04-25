import { baseUrl } from "./index";
import { useState, useEffect } from 'react';

const useFAQ = () => {
    const [faqComponent, setFaqComponent] = useState(0);
    const [photo, setPhoto] = useState('');
    const [icons, setIcons] = useState([]);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        const init = async () => {
            try {
                const iconsData = await fetchIcons();
                setIcons(iconsData.data);
                const questionsData = await fetchQuestions(1);
                setQuestions(questionsData.data);
                setPhoto(icons.find(icon => icon.id === 1)?.icon || '');
            } catch (error) {
                console.error("Error initializing FAQ data:", error);
            }
        };
        init();
    }, []);

    const handleFaqChange = async (id) => {
        try {
            const questionsData = await fetchQuestions(id);
            setQuestions(questionsData.data);
            console.log(questions);
            setPhoto(icons.find(icon => icon.id === id)?.icon || '');
            setFaqComponent(1);
        } catch (error) {
            console.error("There was a problem fetching the questions:", error);
        }
    };

    const resetFaqComponent = () => {
        setFaqComponent(0); // Reset to the initial state
    };

    return { faqComponent, photo, questions, icons, handleFaqChange, resetFaqComponent };
};

export default useFAQ;

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

