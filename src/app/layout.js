import { Vazirmatn } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline } from "@mui/material";

// Css Files
import "./globals.css";

// Custom Components
import { AppBar } from "@/components/Layout";

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
					<CssBaseline />
					<AppBar />
					{children}
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
