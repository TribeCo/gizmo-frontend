// theme
import ThemeProvider from "@/utils/ThemeProvider";
import { MenuItemSelectorProvider } from "@/components/dashboard/DashBoardMenuSelector";

// Css Files
import "./globals.css";
import { Container } from "@mui/material";

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
			<head>
				<meta
					name="google-site-verification"
					content="afypnORVZwz-knlbrGi5xMH1mnSI5gbc1OW9IVqTKnA"
				/>
			</head>
			<body>
				<MenuItemSelectorProvider>
					<ThemeProvider>
						<Container
							sx={{
								padding: 0,
							}}
							maxWidth="xl">
							{children}
						</Container>
					</ThemeProvider>
				</MenuItemSelectorProvider>
			</body>
		</html>
	);
}
