import { Card } from "@/components";
import CardProductSlider from "@/components/CardProductSlider";
import CompanySlider from "@/components/CompanySlider";
import LineSplitter from "@/components/LineSpliter";
import { products } from "@/utils/fakeProduct";
import DescriptionComponent from '@/components/DescriptionComponent';

// this is a simple test to show how the components work:
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


	// test content for introduction section
	const content = "اسپرسو ساز واکاکو مدل Minipresso مح می باشد. با به همراه داشتن اسپرسو ساز قابل حمل Minipresso می توانید یک فنجان اسپرسو خوش طعم را در هنگام کوهنوردی، کمپینگ، سفر و حتی محیط کار نوش جان کنید.این مینی پرسو دارای یک پیمانه، یک عدد فنجان و محفظه ای مجزا برای پودر قهوه با حجم 8 گرم و مخزنی به ظرفیت 80 میلی لیتر برای آب جوش می باشد که با ساختاری کوچک و سبک، تمامی امکانات و کارایی یک دستگاه بزرگ و حرفه ای اسپرسو را دارا می باشد.";

	// test component for comments section, this function should be implement in real application
	function Comments() {
		return (
			<h2>Content for comments section</h2>
		);
	  }

export default function Home() {
	return (
		<main>
			{/* example usage */}
				<LineSplitter text={"line splitter 1"}/>
				<CardProductSlider products={products} itemsPerPage={4} swapTime_millisecond={3000}/>
				<LineSplitter text={"line splitter 2"}/>
				<CompanySlider logos={logos} itemsPerPage={3} swapTime_millisecond={3000}/>
				<LineSplitter text={"line splitter 3"}/>
				<DescriptionComponent introductionContent={content} CommentsSection={<Comments />}/>
				<LineSplitter text={"line splitter 4"}/>
		</main>
	);
}
