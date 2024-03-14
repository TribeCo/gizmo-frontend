import { Footer } from "@/components/Layout";
import AppBar from "@/components/Layout/AppBar";
import React from "react";

export default function CartLayout({ children }) {
	return (
		<section>
			<AppBar />
			{children}
			<Footer />
		</section>
	);
}
