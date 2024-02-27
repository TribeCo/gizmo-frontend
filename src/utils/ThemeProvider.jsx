import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import cache from "./cache";

import theme from "../theme";

import { AuthProvider } from "@/context/AuthContext";

function themeProvider({ children }) {
	return (
		<AuthProvider>
			<AppRouterCacheProvider options={cache}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					{children}
				</ThemeProvider>
			</AppRouterCacheProvider>
		</AuthProvider>
	);
}

export default themeProvider;
