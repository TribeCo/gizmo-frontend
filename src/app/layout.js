import { Vazirmatn } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

// Css Files
import "./globals.css";

// Custom Components
import { Footer, AppBar } from "@/components/Layout";

const vazir = Vazirmatn({ subsets: ["arabic", "latin"], display: "swap" });

export const metadata = {
	title: "Gizmo",
	description: "Gizmo online shop",
};

export default function RootLayout({ children }) {
	return (
		<html lang="fa-IR">
			<body className={vazir.className}>
				<AppRouterCacheProvider>
					<AppBar />
					{children}
					<Footer />
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
