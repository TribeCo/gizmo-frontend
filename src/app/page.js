import { Footer } from "@/components/Layout";
import { Banner, Sections, TopSlider } from "@/components/landing";
import AppBar from "@/components/Layout/AppBar";

import CardProductSlider from "@/components/CardProductSlider";
import CompanySlider from "@/components/CompanySlider";
import LineSplitter from "@/components/LineSpliter";

import {
	banners,
	brands,
	category,
	discountProducts,
	gizmologCards,
	newProducts,
	topSlider,
} from "@/services/Landing";
import GizmoLog from "@/components/landing/GizmoLog";
import RecentlySeen from "@/components/RecentlySeen";

export default async function Home() {
	// APIs
	const bannersList = await banners();
	const discountProductsList = await discountProducts();
	const newProductsList = await newProducts();
	const brandsList = await brands();
	const topSliderList = await topSlider();
	const categoryList = await category();
	const gizmologCardsList = await gizmologCards();

	return (
		<>
			<AppBar isLanding />
			<main>
				<TopSlider data={topSliderList} />
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
				<Sections data={categoryList.data} />
				<RecentlySeen />
				<LineSplitter text={"برترین برند های گیزمو"} />
				<CompanySlider
					brands={brandsList}
					itemsPerPage={5}
					swapTime_millisecond={3000}
				/>
				<LineSplitter text={"گیزمو لاگ"} />
				<GizmoLog data={gizmologCardsList.data} />
			</main>
			<Footer />
		</>
	);
}
