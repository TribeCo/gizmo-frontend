import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { Vazirmatn } from "next/font/google";
import cache from "./cache";

import theme from "../theme";

import { AuthProvider } from "@/context/AuthContext";
import { CartProvider } from "@/context/CartContext";

function themeProvider({ children }) {
	return (
		<AuthProvider>
			<CartProvider>
				<AppRouterCacheProvider options={cache}>
					<ThemeProvider theme={theme}>
						<CssBaseline />
						{children}
					</ThemeProvider>
				</AppRouterCacheProvider>
			</CartProvider>
		</AuthProvider>
	);
}

export default themeProvider;
