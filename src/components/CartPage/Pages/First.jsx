import React from "react";
import ProgressBar from "../ProgressBar";
import CartHeader from "../CartHeader";
import ProductCard from "../ProductCard";
import Box from "@mui/material/Box";

const First = ({ data }) => {
	return (
		<>
			<CartHeader />
			{data.map((item, index) => {
				return (
					<ProductCard
						data={item}
						key={index}
					/>
				);
			})}
		</>
	);
};

export default First;
