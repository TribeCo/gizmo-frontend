import { products } from "@/utils/fakeProduct";
import { Footer } from "@/components/Layout";
import { Colors } from "@/utils";
import { Banner, Sections, TopSlider } from "@/components/landing";
import { Button, Typography, Grid, Box } from "@mui/material";
import AppBar from "@/components/Layout/AppBar";

import CardProductSlider from "@/components/CardProductSlider";
import CompanySlider from "@/components/CompanySlider";
import BlogCard from "@/components/BlogCard";
import LineSplitter from "@/components/LineSpliter";

import anker from "@/components/comanyIcons/anker.png";
import blulory from "@/components/comanyIcons/blulory.png";
import mc from "@/components/comanyIcons/mc.png";
import noon from "@/components/comanyIcons/noon.png";
import wacaco from "@/components/comanyIcons/wacaco.png";
import greenLions from "@/components/comanyIcons/greenLions.png";
import amazon from "@/components/comanyIcons/amazon.png";
import DeliveryPageInfo from "@/components/DeliveryPageInfo";
import {
	banners,
	brands,
	discountProducts,
	newProducts,
} from "@/services/Landing";

const logos = [
	[anker, "https://www.anker.com/"],
	[blulory, "https://www.blulory.com/"],
	[mc, "https://mycandytech.com/"],
	[noon, "https://www.noon.com/"],
	[wacaco, "https://www.wacaco.com/"],
	[greenLions, "https://www.greenlion.net/"],
	[amazon, "https://www.amazon.com/"],
];
// const text =
// 	"\r\n&lt;p&gt;He was a &lt;em&gt;&lt;strong&gt;nice guy!&lt;/strong&gt;&lt;/em&gt;&lt;/p&gt;";
// let Storyblok = new storyblokJsClient();
// function createMarkup(storyblokHTML) {
// 	return {
// 		__html: Storyblok.richTextResolver.render(storyblokHTML),
// 	};
// }
export default async function Home() {
	const bannersList = await banners();
	const discountProductsList = await discountProducts();
	const newProductsList = await newProducts();
	const brandsList = await brands();

	return (
		<>
			<AppBar isLanding />
			{/* <DeliveryPageInfo/> */}
			<main>
				<TopSlider />
				<LineSplitter text={"تخفیف های امروز"} />
				<CardProductSlider
					btn={true}
					products={discountProductsList.data}
					swapTime_millisecond={3000}
				/>
				<Banner data={bannersList} />
				<LineSplitter text={"محصولات جدید گیزمو"} />
				<CardProductSlider
					btn={true}
					products={newProductsList.data}
					swapTime_millisecond={3000}
				/>
				<LineSplitter text={"دسته بندی ها"} />
				<Sections />
				<LineSplitter text={"محصولات مشاهده شده"} />
				{/* <CardProductSlider
					btn={true}
					products={products}
					swapTime_millisecond={3000}
				/> */}
				<LineSplitter text={"برترین برند های گیزمو"} />
				<CompanySlider
					brands={brandsList}
					itemsPerPage={5}
					swapTime_millisecond={3000}
				/>
				<LineSplitter text={"گیزمو لاگ"} />
				<Grid
					container
					justifyContent="space-around"
					sx={{
						px: { lg: 3 },
						gap: { xs: 0, lg: 2 },
					}}
					columns={3}
					flexWrap="nowrap">
					<Grid item>
						<BlogCard
							background_color={Colors.blue}
							font_color="white"
						/>
					</Grid>
					<Grid item>
						<BlogCard
							background_color={Colors.blue}
							font_color="white"
						/>
					</Grid>
					<Grid item>
						<BlogCard
							background_color={Colors.blue}
							font_color="white"
						/>
					</Grid>
					<Grid
						item
						sx={{ display: { xs: "none", xl: "flex" } }}>
						<BlogCard
							background_color={Colors.blue}
							font_color="white"
						/>
					</Grid>
				</Grid>
				<Button
					variant="contained"
					sx={{
						transform: {
							xs: "scale(0.7)",
							sm: "scale(0.8)",
							md: "scale(1)",
						},
						display: "block",
						mt: { xs: 0, md: 5 },
						mb: 5,
						mx: "auto",
						border: `3px solid ${Colors.orange}`,
						color: "#000000",
						bgcolor: "#FFFFFF",
						borderRadius: "30px",
						width: "300px",
						height: "60px",
						"&:hover": {
							bgcolor: Colors.orange,
						},
					}}>
					<Typography
						variant="h5"
						sx={{
							fontWeight: "700",
							fontSize: "20px",
						}}>
						{"مشاهده محصولات بیشتر"}
					</Typography>
				</Button>
			</main>
			<Footer />
		</>
	);
}
