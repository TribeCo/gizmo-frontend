'use client'
import CardProductSlider from "@/components/CardProductSlider";
import CompanySlider from "@/components/CompanySlider";
import LineSplitter from "@/components/LineSpliter";
import { products } from "@/utils/fakeProduct";
import DescriptionComponent from "@/components/DescriptionComponent";
import UserInfoPage from "@/components/UserInfoPage";
import { Box, Button, Typography, Grid } from "@mui/material";
import BlogCard from "@/components/BlogCard";
import { Colors } from "@/utils";
import { Banner, Sections } from "@/components/landing";

// this is a simple test to show how the components work:
// example data
import anker from "@/components/comanyIcons/anker.png";
import blulory from "@/components/comanyIcons/blulory.png";
import mc from "@/components/comanyIcons/mc.png";
import noon from "@/components/comanyIcons/noon.png";
import wacaco from "@/components/comanyIcons/wacaco.png";
import greenLions from "@/components/comanyIcons/greenLions.png";
import amazon from "@/components/comanyIcons/amazon.png";
import DashBoardNotifications from "@/components/DashBoard/DashBoardNotifications/DashBoardNotifications";
import DashBoardDubaiOrders from "@/components/DashBoard/DashBoardDubaiOrders/DashBoardDubaiOrders";
import DashBoardFavoriteProduct from "@/components/DashBoard/DashBoardFavoriteProducts/DashBoardFavoriteProduct";
import DashBoardOrders from "@/components/DashBoard/DashBoardOrders/DashBoardOrders";
import DashBoardEditProfile from "@/components/DashBoard/DashBoardEditProfile/DashBoardEditProfile";

const logos = [
	[anker, "https://www.anker.com/"],
	[blulory, "https://www.blulory.com/"],
	[mc, "https://mycandytech.com/"],
	[noon, "https://www.noon.com/"],
	[wacaco, "https://www.wacaco.com/"],
	[greenLions, "https://www.greenlion.net/"],
	[amazon, "https://www.amazon.com/"],
];

export default function Home() {

	return (
		<main>
			{/* <DashBoardFavoriteProduct/> */}
			{/* <DashBoardDubaiOrders/> */}
			<DashBoardOrders/>
			{/* <DashBoardNotifications/> */}
			{/* <DashBoardEditProfile/> */}
			{/* <LineSplitter text={"تخفیف های امروز"} />
			<CardProductSlider
				btn={true}
				products={products}
				itemsPerPage={4}
				swapTime_millisecond={3000}
			/>
			<Banner />
			<LineSplitter text={"محصولات جدید گیزمو"} />
			<CardProductSlider
				btn={true}
				products={products}
				itemsPerPage={4}
				swapTime_millisecond={3000}
			/>
			<LineSplitter text={"دسته بندی ها"} />
			<Sections />
			<LineSplitter text={"محصولات مشاهده شده"} />
			<CardProductSlider
				btn={true}
				products={products}
				itemsPerPage={4}
				swapTime_millisecond={3000}
			/>
			<LineSplitter text={"برترین برند های گیزمو"} />
			<CompanySlider
				logos={logos}
				itemsPerPage={5}
				swapTime_millisecond={3000}
			/>
			<LineSplitter text={"گیزمو لاگ"} />
			<Box
				display="flex"
				justifyContent="space-around"
				px={10}>
				<BlogCard />
				<BlogCard />
				<BlogCard />
			</Box>
			<Button
				variant="contained"
				sx={{
					display: "block",
					my: 5,
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
			</Button> */}
		</main>	
	);
}
