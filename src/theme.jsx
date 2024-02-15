"use client";

// import { Vazirmatn } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import localFont from "next/font/local";

// const vazirMatn = Vazirmatn({ subsets: ["arabic", "latin"], display: "swap" });
const vazir = localFont({ src: "./Vazir.woff2" });

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
	},
});

export default theme;
