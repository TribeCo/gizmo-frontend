"use client";
import { Vazirmatn } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"], display: "swap" });

const theme = createTheme({
	direction: "rtl",
	typography: {
		fontFamily: vazir.style.fontFamily,
	},
	palette: {
		primary: {
			light: "#8ECDDD",
			main: "#22668D",
			dark: "#252B48",
			contrastText: "#fff",
		},
		secondary: {
			light: "#FFFADD",
			main: "#FFCC70",
			contrastText: "#fff",
		},
	},
});

export default theme;