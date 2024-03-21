"use client";

import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";
import { Vazirmatn } from "next/font/google";

// const vazir = localFont({ src: "./Vazir.woff2" });
const vazir = Vazirmatn({
	subsets: ["arabic"],
	display: "swap",
});

export const theme = createTheme({
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
			contrastText: "#000",
		},
		background: {
			default: "#FFFFFF",
			paper: "#FCFCFC",
		},
	},
});

export default theme;
