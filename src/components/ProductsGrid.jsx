"use client";
import React, { useState, useEffect } from "react"; 
import React, { useState, useEffect } from "react";
import { Box, Fab, Grid, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import FilterBar from "./FilterBar";
import FilterCard from "./FilterCard";
import PersianPagination from "./PersianPagination";
import ProductNotFound from "./ProductNotFound";
import { FilterAlt } from "@mui/icons-material";
import FilterCardModel from "./FilterCardModel";
import { getBrands } from "@/services/categories";

const PRODUCTS_PER_PAGE = 12;

const ProductsGrid = ({ productsList }) => {
	const [openFilterModel, setOpenFilterModel] = useState(false);
	const [filter, setFilter] = useState("پیشفرض");
	const [filteredProducts, setFilteredProducts] = useState(productsList);
	const [page, setPage] = useState(1);
	const [isAvailable, setIsAvailable] = useState(false);
	const [isFreeShipping, setIsFreeShipping] = useState(false);
	const [isSpecialSale, setIsSpecialSale] = useState(false);
	const [minPrice, setMinPrice] = useState(0);
	const [maxPrice, setMaxPrice] = useState(500_000_000);
	const [brandList, setBrandList] = useState([]);
	const [selectedBrands, setSelectedBrands] = useState([]);
	const pageCount = Math.ceil(productsList.length / PRODUCTS_PER_PAGE);
	const handleChange = (event, value) => {
		setPage(value);
	};

	const paginatedProducts = filteredProducts.slice(
		(page - 1) * PRODUCTS_PER_PAGE,
		page * PRODUCTS_PER_PAGE,
	);

	const applyFilter = () => {
		let tempProducts = [...productsList];
		if (isAvailable) {
			tempProducts = tempProducts.filter((product) => product.is_available);
		}
		if (isFreeShipping) {
			tempProducts = tempProducts.filter((product) => product.send_free);
		}
		if (isSpecialSale) {
			tempProducts = tempProducts.filter((product) => product.net_sale);
		}
		if (selectedBrands.length > 0) {
			console.log(selectedBrands);
			tempProducts = tempProducts.filter((product) =>
				selectedBrands.includes(product.brand_name),
			);
			console.log(tempProducts);
		}
		if (minPrice) {
			tempProducts = tempProducts.filter(
				(product) => product.price >= minPrice,
			);
		}
		if (maxPrice) {
			tempProducts = tempProducts.filter(
				(product) => product.price <= maxPrice,
			);
		}
		switch (filter) {
			case "جدیدترین":
				tempProducts.sort((a, b) => new Date(b.updated) - new Date(a.updated));
				break;
			case "ارزان‌ترین":
				tempProducts.sort((a, b) => a.price - b.price);
				break;
			case "گران‌ترین":
				tempProducts.sort((a, b) => b.price - a.price);
				break;
			case "پرفروش‌ترین":
				tempProducts.sort((a, b) => b.ordered - a.ordered);
				break;
			case "پیشفرض":
				break; // No filter applied, so leave tempProducts as is
		}

		console.log(tempProducts);
		return tempProducts;
	};
	const fetchBrands = async () => {
		try {
			const brandResponse = await getBrands();
			setBrandList(brandResponse);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchBrands();
	}, []);
	useEffect(() => {
		const newProductList = applyFilter();
		setFilteredProducts(newProductList);
	}, [
		filter,
		productsList,
		isAvailable,
		isFreeShipping,
		isSpecialSale,
		selectedBrands,
		minPrice,
		maxPrice,
	]);

	return (
		<Box
			sx={{
				pb: 12,
				pl: { xs: 0, sm: 7, md: 7, lg: 0, xl: 0 },
				height: "auto",
				width: { xs: "100vw", lg: "auto" },
			}}>
			<Box
				sx={{
					display: "flex",
					justifyContent: "end",
					gap: 2,
				}}>
				<FilterCard
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
					dropdownOptions={brandList}
					setSelectedBrands={setSelectedBrands}
				/>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						width: "100%",
						gap: 5,
						px: 1,
					}}>
					<FilterBar
						filterNames={[
							"پیشفرض",
							"پرفروش‌ترین",
							"جدیدترین",
							"ارزان‌ترین",
							"گران‌ترین",
						]}
						onFilterChange={(selectedFilter) => setFilter(selectedFilter)}
					/>
					{paginatedProducts.length > 0 ? (
						<Grid
							container
							spacing={4}
							sx={{ width: "100%", justifyContent: "start", px: 1 }}>
							{/* Ensure the Grid takes up the full width */}
							{paginatedProducts.map((product) => (
								<Grid
									item
									xs={6}
									sm={3}
									md={4}
									lg={4}
									xl={3}
									key={product.id}
									sx={{ display: "flex", alignItems: "center" }}>
									<ProductCard product={product} />
								</Grid>
							))}
						</Grid>
					) : (
						<ProductNotFound />
					)}
				</Box>
			</Box>
			<Box
				display="flex"
				justifyContent="end"
				sx={{
					display: { xs: "flex", lg: "none" },
				}}>
				<Fab
					onClick={() => setOpenFilterModel(true)}
					color="primary"
					variant="extended"
					sx={{
						mt: 5,
						mr: 5,
					}}>
					<FilterAlt sx={{ color: "#FFF" }} />
					<Typography sx={{ color: "#FFF" }}>{"فیلتر ها"}</Typography>
				</Fab>
			</Box>
			{pageCount > 1 && (
				<PersianPagination
					count={pageCount}
					page={page}
					onChange={handleChange}
				/>
			)}
			<FilterCardModel
				open={openFilterModel}
				handleClose={() => setOpenFilterModel(false)}
				isAvailable={isAvailable}
				setIsAvailable={setIsAvailable}
				isFreeShipping={isFreeShipping}
				isSpecialSale={isSpecialSale}
				setIsSpecialSale={setIsSpecialSale}
				setIsFreeShipping={setIsFreeShipping}
				minPrice={minPrice}
				maxPrice={maxPrice}
				setMinPrice={setMinPrice}
				setMaxPrice={setMaxPrice}
				brandList={brandList}
				setSelectedBrands={setSelectedBrands}
			/>
		</Box>
	);
};

export default ProductsGrid;
