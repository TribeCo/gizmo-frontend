import { Footer } from "@/components/Layout";
import AppBar from "@/components/Layout/AppBar";
import React from "react";

export default function DubaiLayout({ children }) {
	return (
		<section>
			<AppBar />
			{children}
			<Footer />
		</section>
	);
}
