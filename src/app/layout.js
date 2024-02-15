// theme
import ThemeProvider from "@/utils/ThemeProvider";

// Css Files
import "./globals.css";

// Custom Components
import { AppBar } from "@/components/Layout";

export const metadata = {
	title: "Gizmo",
	description: "Gizmo online shop",
};

export default function RootLayout({ children }) {
	return (
		<html
			lang="fa-IR"
			dir="rtl">
			<body>
				<ThemeProvider>
					<AppBar />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
