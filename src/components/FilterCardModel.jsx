import { Box, Dialog } from "@mui/material";
import React from "react";
import FilterCard from "./FilterCard";

const FilterCardModel = ({
	open,
	handleClose,
	isAvailable,
	setIsAvailable,
	isFreeShipping,
	isSpecialSale,
	setIsSpecialSale,
	setIsFreeShipping,
	minPrice,
	maxPrice,
	setMinPrice,
	setMaxPrice,
	brandList,
	setBrandList,
}) => {
	return (
		<Dialog
			open={open}
			onClose={handleClose}>
			<Box
				display="flex"
				alignItems="center"
				justifyContent="center">
				<FilterCard
					isModal={true}
					filterList={[
						{
							name: "فقط کالاهای موجود",
							label: "فقط کالاهای موجود",
							state: isAvailable,
							setState: setIsAvailable,
						},
						{
							name: "ارسال رایگان",
							label: "ارسال رایگان",
							state: isFreeShipping,
							setState: setIsFreeShipping,
						},
						{
							name: "فروش ویژه",
							label: "فروش ویژه",
							state: isSpecialSale,
							setState: setIsSpecialSale,
						},
					]}
					minPrice={minPrice}
					setMinPrice={setMinPrice}
					maxPrice={maxPrice}
					setMaxPrice={setMaxPrice}
					brandList={brandList}
					setBrandList={setBrandList}
				/>
			</Box>
		</Dialog>
	);
};

export default FilterCardModel;
