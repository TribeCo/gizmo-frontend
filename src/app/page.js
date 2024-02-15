import { Card } from "@/components";
import CardProductSlider from "@/components/CardProductSlider";
import CompanySlider from "@/components/CompanySlider";
import LineSplitter from "@/components/LineSpliter";
import { products } from "@/utils/fakeProduct";

// example data
import anker from "@/components/comanyIcons/anker.png";
import blulory from "@/components/comanyIcons/blulory.png";
import mc from "@/components/comanyIcons/mc.png";
import noon from "@/components/comanyIcons/noon.png";
import wacaco from "@/components/comanyIcons/wacaco.png";
import greenLions from "@/components/comanyIcons/greenLions.png";
import amazon from "@/components/comanyIcons/amazon.png";

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
			{/* example usage */}
			<LineSplitter text={"line splitter 1"} />
			<CardProductSlider
				products={products}
				itemsPerPage={4}
				swapTime_millisecond={3000}
			/>
			<LineSplitter text={"line splitter 2"} />
			<CompanySlider
				logos={logos}
				itemsPerPage={3}
				swapTime_millisecond={3000}
			/>
			<LineSplitter text={"line splitter 3"} />
		</main>
	);
}
