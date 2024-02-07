import { Vazirmatn } from "next/font/google";

// Css Files
import "./globals.css";

// Custom Components
import { Footer } from "@/components/Layout";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"], display: "swap" });

export const metadata = {
	title: "Gizmo",
	description: "Gizmo online shop",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fa-IR">
			<body className={vazir.className}>
				{children}
				<Footer />
			</body>
		</html>
	);
}
