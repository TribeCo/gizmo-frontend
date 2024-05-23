"use client";
import React, { useEffect, useState } from "react";
import LineSplitter from "@/components/LineSpliter";
import _return from "@/components/siteIcons/return.png";
import { fetchIcons, fetchQuestions } from "@/services/Faq";
import Questions from "@/components/Faq/Questions";
import MainIcons from "@/components/Faq/MainIcons";
import { useMenuItemContext } from "@/components/dashboard/DashBoardMenuSelector";

export default function FAQ() {
	const [icons, SetIcons] = useState([]);
	const [questions, SetQuestions] = useState([]);
	const [photo, SetPhoto] = useState("");
	const { menuItemValue, setMenuItemValue } = useMenuItemContext();
	const handleMenuItemClick = (menuItem) => {
		console.log(menuItem);
		setMenuItemValue(menuItem);
	};
	useEffect(() => {
		handleInit();
		if (icons || questions) {
			handleInit();
		}
	}, []);

	const handleInit = async () => {
		SetIcons((await fetchIcons()).data);
		SetQuestions((await fetchQuestions(1)).data);
		SetPhoto(icons.find((icon) => icon.id === 1)?.icon || "");
	};

	const handleQuestions = async (id) => {
		try {
			SetQuestions((await fetchQuestions(id)).data);
			SetPhoto(icons.find((icon) => icon.id === id)?.icon || "");
			setMenuItemValue(1);
		} catch (error) {
			console.error("There was a problem fetching the questions:", error);
		}
	};

	const Pages = [
		<MainIcons
			key={0}
			Icons={icons}
			handleFaqChange={handleQuestions}
		/>,
		<Questions
			key={1}
			reset={handleMenuItemClick}
			photo={photo}
			questions={questions}
		/>,
	];

	return (
		<>
			<LineSplitter text="سوالات متداول" />
			{Pages[menuItemValue]}
		</>
	);
}
