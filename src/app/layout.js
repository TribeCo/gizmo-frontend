// theme
import ThemeProvider from "@/utils/ThemeProvider";
import { MenuItemSelectorProvider } from "@/components/dashboard/DashBoardMenuSelector";

// Css Files
import "./globals.css";

// Custom Components
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
				<MenuItemSelectorProvider>
					<ThemeProvider>{children}</ThemeProvider>
				</MenuItemSelectorProvider>
			</body>
		</html>
	);
}
