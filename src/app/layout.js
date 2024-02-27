// theme
import ThemeProvider from "@/utils/ThemeProvider";

// Css Files
import "./globals.css";

// Custom Components
import Footer from "@/components/Layout/Footer";
import AppBar from "@/components/Layout/AppBar";
import LandingAppBar from "@/components/LandingAppBar";
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
					{/* <LandingAppBar /> */}
					{children}
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
