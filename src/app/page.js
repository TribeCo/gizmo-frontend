import { Card } from "@/components";
import CompanySlide from "@/components/CompanySlide";
import LineSplitter from "@/components/LineSpliter";

export default function Home() {
	return (
		<main>
			<div>فروشگاه گیزمو</div>
			<Card />


			<LineSplitter text="برترین برند های گیزمو"/>
			<CompanySlide />
			<LineSplitter text="گیزمو لاگ"/>
		</main>
	);
}
