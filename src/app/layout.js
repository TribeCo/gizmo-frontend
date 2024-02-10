import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
// theme
import { light, dark } from "../theme";

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
				<AppRouterCacheProvider options={{ enableCssLayer: true }}>
					<ThemeProvider theme={light}>
						<CssBaseline />
						<AppBar />
						{children}
					</ThemeProvider>
				</AppRouterCacheProvider>
			</body>
		</html>
	);
}
