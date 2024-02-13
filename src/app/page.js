import { Card } from "@/components";
import CardProductSlider from "@/components/CardProductSlider";
import CompanySlider from "@/components/CompanySlider";
import LineSplitter from "@/components/LineSpliter";

// example data
	import anker from "@/components/comanyIcons/anker.png";
	import blulory from "@/components/comanyIcons/blulory.png";
	import mc from "@/components/comanyIcons/mc.png";
	import noon from "@/components/comanyIcons/noon.png";
	import wacaco from "@/components/comanyIcons/wacaco.png";
	import greenLions from "@/components/comanyIcons/greenLions.png"
	import amazon from "@/components/comanyIcons/amazon.png"

	const logos = [
		[anker, 'https://www.anker.com/'],
		[blulory, 'https://www.blulory.com/'],
		[mc, 'https://mycandytech.com/'],
		[noon, 'https://www.noon.com/'],
		[wacaco, 'https://www.wacaco.com/'],
		[greenLions, 'https://www.greenlion.net/'],
		[amazon, 'https://www.amazon.com/'],
	];

	const products = [
		{ name: 'Product 1', description: 'Description for Product 1' },
		{ name: 'Product 2', description: 'Description for Product 2' },
		{ name: 'Product 3', description: 'Description for Product 3' },
		{ name: 'Product 4', description: 'Description for Product 4' },
		{ name: 'Product 5', description: 'Description for Product 5' },
		{ name: 'Product 6', description: 'Description for Product 6' },
		{ name: 'Product 7', description: 'Description for Product 7' },
		{ name: 'Product 8', description: 'Description for Product 8' },
		{ name: 'Product 9', description: 'Description for Product 9' },
	];


export default function Home() {
	return (
		<main>
			<div className="bg-palette-blue-light">فروشگاه گیزمو</div>
			<Card />

			{/* example usage */}
				<LineSplitter text={"line splitter 1"}/>
				<CardProductSlider products={products} itemsPerPage={4} swapTime_millisecond={3000}/>
				<LineSplitter text={"line splitter 2"}/>
				<CompanySlider logos={logos} itemsPerPage={3} swapTime_millisecond={3000}/>
				<LineSplitter text={"line splitter 3"}/>
		</main>
	);
}
