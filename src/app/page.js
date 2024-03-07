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
	recentlySeenProduct,
	topSlider,
} from "@/services/Landing";
import GizmoLog from "@/components/landing/GizmoLog";

// const text =
// 	"\r\n&lt;p&gt;He was a &lt;em&gt;&lt;strong&gt;nice guy!&lt;/strong&gt;&lt;/em&gt;&lt;/p&gt;";
// let Storyblok = new storyblokJsClient();
// function createMarkup(storyblokHTML) {
// 	return {
// 		__html: Storyblok.richTextResolver.render(storyblokHTML),
// 	};
// }

export default async function Home() {
	const access =
		"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA5OTI2NDQwLCJpYXQiOjE3MDk4NDAwNDAsImp0aSI6IjVkNjkwNzRiMzE0OTQ0Zjk5ZDM1MzRkYWJiODNhZjIwIiwidXNlcl9pZCI6MSwicGhvbmVOdW1iZXIiOiIxIiwiZW1haWwiOiIiLCJpc19hZG1pbiI6dHJ1ZSwiaXNfYWN0aXZlIjp0cnVlfQ.Ngu9SnfjdRtXWUdnb2gz8CApoAddtjVyuY6w8Y3d-K0";

	// APIs
	const bannersList = await banners();
	const discountProductsList = await discountProducts();
	const newProductsList = await newProducts();
	const brandsList = await brands();
	const recentlySeenList = await recentlySeenProduct({ access });
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
				<LineSplitter text={"محصولات مشاهده شده"} />
				<CardProductSlider
					btn={false}
					products={recentlySeenList.data}
					swapTime_millisecond={3000}
				/>
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
