import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";
import cache from "./cache";

import theme from "../theme";

function themeProvider({ children }) {
	return (
		<AppRouterCacheProvider options={cache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				{children}
			</ThemeProvider>
		</AppRouterCacheProvider>
	);
}

export default themeProvider;
